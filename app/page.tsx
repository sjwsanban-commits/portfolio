"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects, trailImages } from "./projects";

type TrailItem = { id: number; src: string; x: number; y: number; rotation: number };

export default function Home() {
  const [trail, setTrail] = useState<TrailItem[]>([]);
  const [contactOpen, setContactOpen] = useState(false);
  const counter = useRef(0);
  const lastPoint = useRef({ x: -200, y: -200 });

  const addImage = useCallback((x: number, y: number) => {
    const distance = Math.hypot(x - lastPoint.current.x, y - lastPoint.current.y);
    if (distance < 76) return;
    lastPoint.current = { x, y };
    const id = counter.current++;
    const item = {
      id,
      src: trailImages[id % trailImages.length],
      x,
      y,
      rotation: ((id * 13) % 17) - 8,
    };
    setTrail((current) => [...current.slice(-7), item]);
    window.setTimeout(() => {
      setTrail((current) => current.filter((entry) => entry.id !== id));
    }, 1150);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setTrail([]);
        setContactOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main>
      <section
        className="hero"
        aria-label="Olivia Shi — independent designer"
        onMouseMove={(event) => addImage(event.clientX, event.clientY)}
        onTouchMove={(event) => {
          const touch = event.touches[0];
          if (touch) addImage(touch.clientX, touch.clientY);
        }}
      >
        <header className="nav">
          <a className="mark" href="#top" aria-label="Olivia Shi home">OS</a>
          <span>Independent designer · Shanghai</span>
          <button className="contact-trigger" type="button" onClick={() => setContactOpen(true)}>Let&apos;s work together ↗</button>
        </header>

        <div className="hero-copy" id="top">
          <p className="intro">
            Strategic design thinker with more than 10 years of experience in brand and
            advertising design, multidimensional research, and
            cross-platform execution.
          </p>
          <h1><span>Olivia</span><span>Shi</span></h1>
        </div>

        <div className="hero-foot">
          <span>Brand · Packaging · Advertising</span>
          <a href="#work">Selected work ↓</a>
          <span>10+ years of design experience</span>
        </div>

        <div className="trail" aria-hidden="true">
          {trail.map((item) => (
            <img
              key={item.id}
              src={item.src}
              alt=""
              style={{ left: item.x, top: item.y, rotate: `${item.rotation}deg` }}
            />
          ))}
        </div>
      </section>

      {contactOpen && (
        <div className="contact-modal" role="dialog" aria-modal="true" aria-label="Olivia Shi WeChat contact">
          <button className="contact-backdrop" type="button" onClick={() => setContactOpen(false)} aria-label="Close contact card" />
          <div className="contact-card">
            <button type="button" onClick={() => setContactOpen(false)} aria-label="Close contact card">Close ×</button>
            <img src="/contact/olivia-wechat.jpg" alt="Olivia Shi WeChat QR code" />
          </div>
        </div>
      )}

      <section className="work" id="work">
        <div className="work-head">
          <h2>Selected work</h2>
          <p>2016—2026</p>
          <p>Scroll to explore</p>
        </div>
        <div className="masonry">
          {projects.map((project, index) => (
            <article className={`project project-${project.slug} ${project.crop ?? ""}`} key={project.title}>
              <a className="project-link" href={`/work/${project.slug}`} aria-label={`View ${project.title} case study`}>
                <img src={project.cover} alt={`${project.title} project`} loading={index > 2 ? "lazy" : "eager"} />
                <div className="project-meta">
                  <div><strong>{project.title}</strong><span>{project.type}</span></div>
                  <span>{project.tag}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="profile" aria-label="About Olivia Shi">
        <p>What I bring</p>
        <div className="profile-intro">
          <h2>Logic gives beauty its structure.</h2>
          <p>
            Shanghai-based brand designer with experience across packaging,
            identity and advertising communications. Currently at WPP;
            previously Ogilvy, Jones Knowles Ritchie and MetaThink.
          </p>
        </div>
        <div className="profile-meta">
          <span>MA in Brand Identity<br />University of the Arts London</span>
          <span>BA in Brand Identity & Public Space<br />SIVA, Fudan University</span>
        </div>
        <div className="profile-capabilities">
          <article>
            <span>01</span>
            <h3>Brand-system thinking</h3>
            <p>From positioning and identity to multi-touchpoint applications, I build cohesive and scalable brand experiences.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Cross-media expression</h3>
            <p>Fluent across identity, packaging, advertising and digital environments, I keep one creative voice consistent across mediums.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Strategic aesthetics</h3>
            <p>Grounded in audience, market and cultural trends, I establish clear visual direction and turn design into meaningful commercial language.</p>
          </article>
        </div>
      </section>

      <footer>
        <p className="footer-kicker">Have a project in mind?</p>
        <a className="footer-email" href="mailto:sjwsanban@sina.com">sjwsanban@sina.com ↗</a>
        <div className="footer-info">
          <div>
            <span>Phone</span>
            <a href="tel:+8615821635307">+86 158 2163 5307</a>
          </div>
          <div>
            <span>WeChat</span>
            <p>sjw909028426</p>
          </div>
          <div className="footer-clients">
            <span>Selected clients</span>
            <p>Fanta · Nestlé · Budweiser · Harbin Beer · IHG · OPPO / ColorOS · CATL / Flexhub · Unilumin · Agricultural Bank of China · Aviva-COFCO · MEIONE · Nana Jacqueline · Balini Coffee</p>
          </div>
        </div>
        <div className="footer-base"><span>© 2026 Olivia Shi</span><span>Shanghai · Worldwide</span></div>
      </footer>
    </main>
  );
}
