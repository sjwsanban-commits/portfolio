import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, getProjectImages, projects } from "../../projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Olivia Shi`,
    description: project.overview,
    openGraph: { images: [project.cover] },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const images = getProjectImages(project);
  const galleryMedia = project.galleryMedia ?? images.map((src) => ({
    src,
    kind: "image" as const,
    alt: `${project.title} project page`,
  }));
  const galleryCountLabel = project.galleryMedia
    ? `${galleryMedia.length} items`
    : `${galleryMedia.length} pages`;
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className={`case-page case-${project.slug}`}>
      <header className="case-nav">
        <Link className="mark" href="/" aria-label="Back to Olivia Shi portfolio">OS</Link>
        <span>{String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        <Link href="/#work">Close ×</Link>
      </header>

      <section className="case-hero">
        <p>{project.type}</p>
        <h1 className="case-title">{project.title}</h1>
        <div className="case-hero-meta">
          <span>Olivia Shi — Selected Work</span>
          <span>{project.tag}</span>
          <span>Scroll to explore ↓</span>
        </div>
      </section>

      {!project.hideHero && (
        <div className={`case-cover ${project.heroCrop ?? ""}`}>
          <img src={project.heroImage} alt={`${project.title} hero`} />
        </div>
      )}

      <section className="case-overview">
        <p className="case-kicker">Project overview</p>
        <div>
          <p className="case-lead">{project.overview}</p>
          <dl className="case-facts">
            <div><dt>Discipline</dt><dd>{project.type}</dd></div>
            <div><dt>Project</dt><dd>{project.title}</dd></div>
          </dl>
        </div>
      </section>

      {(project.challenge || project.solution) && (
        <section className="case-strategy">
          {project.challenge && <div><span>01 — Challenge</span><p>{project.challenge}</p></div>}
          {project.solution && <div><span>02 — Solution</span><p>{project.solution}</p></div>}
        </section>
      )}

      {project.concept && (
        <section className="case-concept">
          <span>Creative concept</span>
          <p>{project.concept}</p>
        </section>
      )}

      <section className="case-gallery" aria-label={`${project.title} full project gallery`}>
        <div className="case-gallery-head">
          <span>Full project</span>
          <span>{galleryCountLabel}</span>
        </div>
        {galleryMedia.map((media, mediaIndex) => (
          <figure className={`case-frame ${media.kind === "video" ? "case-frame-video" : ""}`} key={media.src}>
            {media.kind === "video" ? (
              <video autoPlay controls loop muted playsInline preload="metadata" aria-label={media.alt}>
                <source src={media.src} type="video/mp4" />
              </video>
            ) : (
              <img src={media.src} alt={`${media.alt} ${mediaIndex + 1}`} loading={mediaIndex > 1 ? "lazy" : "eager"} />
            )}
            <figcaption>{String(mediaIndex + 1).padStart(2, "0")} / {String(galleryMedia.length).padStart(2, "0")}</figcaption>
          </figure>
        ))}
      </section>

      <a className="next-case" href={`/work/${next.slug}`}>
        <span>Next project</span>
        <strong>{next.title}</strong>
        <span>{next.type} ↗</span>
      </a>
    </main>
  );
}
