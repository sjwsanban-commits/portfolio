export type Project = {
  slug: string;
  title: string;
  type: string;
  tag: string;
  cover: string;
  crop?: string;
  heroImage: string;
  heroCrop?: string;
  hideHero?: boolean;
  overview: string;
  challenge?: string;
  solution?: string;
  concept?: string;
  pageRange?: [number, number];
  galleryMedia?: Array<{
    src: string;
    kind: "image" | "video";
    alt: string;
  }>;
};

const projectCatalog: Project[] = [
  {
    slug: "fanta",
    title: "Fanta",
    type: "Packaging · FMCG",
    tag: "Campaign",
    cover: "/cases/fanta/page-11.jpg",
    heroImage: "/cases/fanta/page-11.jpg",
    overview: "A limited-edition packaging system created for China’s national college entrance examination. The work connects Fanta’s playful brand assets with a culturally specific moment, positioning the drink as an optimistic symbol of encouragement and good luck.",
    challenge: "Adapt a global brand to a culturally specific moment in China, strengthen recognition, and distinguish the official product through a memorable campaign language.",
    solution: "Retain Fanta’s familiar assets while introducing a modular graphic system built from positive symbols, energetic color, and youth-culture applications.",
    concept: "The Chinese name for Fanta includes the grass radical. Deconstructing it into two graphic marks became the foundation of a visual language centered on points, boosts, and good fortune.",
    pageRange: [6, 13],
  },
  {
    slug: "balini-coffee",
    title: "Balini Coffee",
    type: "Packaging · Coffee",
    tag: "Identity",
    cover: "/portfolio/balini-coffee.jpg",
    heroImage: "/cases/balini-coffee/page-16.jpg",
    overview: "A packaging identity for an Indonesian coffee brand with nearly a century of history. The system translates the brand’s regional heritage into a distinctive, contemporary presence for China’s growing urban coffee market.",
    challenge: "Build recognition for Indonesian coffee in a market where awareness of the category remains limited, while creating a brand story that can extend across products.",
    solution: "Create a youthful visual language rooted in regional color, craft, and geometric patterns, then apply it consistently across packaging formats.",
    pageRange: [14, 17],
  },
  {
    slug: "nana-jacqueline",
    title: "Nana Jacqueline",
    type: "Packaging · Luxury",
    tag: "2024",
    cover: "/portfolio/nana-jacqueline-home.png",
    heroImage: "/cases/nana-jacqueline/page-19.jpg",
    heroCrop: "crop-left",
    overview: "A key visual and packaging system for Nana Jacqueline’s Spring/Summer 2024 ‘Giardino Estivo’ presentation. Bougainvillea runs throughout the system as an elegant, romantic, and free-spirited expression of the summer garden theme.",
    solution: "Combine expressive tropical florals, refined typography, and a rich pink-to-burgundy color palette to create a fashion-forward system spanning invitations, gifts, and event applications.",
    pageRange: [18, 20],
  },
  {
    slug: "la-chapelle",
    title: "La Chapelle",
    type: "Key Visual · Fashion",
    tag: "Spring/Summer 2024",
    cover: "/portfolio/la-chapelle-home-clean.png",
    heroImage: "/cases/la-chapelle/sequence.png",
    hideHero: true,
    overview: "This project serves as the key visual for La Chapelle’s Spring/Summer 2024 runway show, centered on the theme of “懿”—a Chinese character that embodies virtue, grace, and timeless beauty. Drawing on the form of traditional Chinese scrolls, the visual unfolds slowly and deliberately, echoing the restraint and rhythm of Chinese aesthetics. It both honors the depth of Chinese cultural heritage and brings a quietly commanding Eastern voice to contemporary fashion.",
    galleryMedia: [
      {
        src: "/cases/la-chapelle/sequence.png",
        kind: "image",
        alt: "La Chapelle scroll key visual animation sequence",
      },
      {
        src: "/cases/la-chapelle/comp-1.mp4",
        kind: "video",
        alt: "La Chapelle Spring/Summer 2024 runway key visual animation",
      },
    ],
  },
  {
    slug: "chinese-new-year-poster",
    title: "Chinese New Year Poster",
    type: "Motion · Art Direction",
    tag: "Annual Zodiac Series",
    cover: "/portfolio/chinese-new-year-poster.png",
    heroImage: "/portfolio/chinese-new-year-poster.png",
    hideHero: true,
    overview: "Each year, I create a New Year poster inspired by that year’s zodiac animal, sharing my best wishes and celebrating the spirit of the season.",
    galleryMedia: [
      {
        src: "/cases/chinese-new-year-poster/poster-sequence-2024.png",
        kind: "image",
        alt: "Chinese New Year 2024 poster sequence",
      },
      {
        src: "/cases/chinese-new-year-poster/poster-motion-01.mp4",
        kind: "video",
        alt: "Chinese New Year 2024 poster animation",
      },
      {
        src: "/cases/chinese-new-year-poster/poster-sequence-2025.png",
        kind: "image",
        alt: "Chinese New Year 2025 poster sequence",
      },
      {
        src: "/cases/chinese-new-year-poster/poster-motion-02.mp4",
        kind: "video",
        alt: "Chinese New Year 2025 poster animation",
      },
      {
        src: "/cases/chinese-new-year-poster/poster-sequence-2026.png",
        kind: "image",
        alt: "Chinese New Year 2026 poster sequence",
      },
      {
        src: "/cases/chinese-new-year-poster/poster-motion-03.mp4",
        kind: "video",
        alt: "Chinese New Year 2026 poster animation",
      },
    ],
  },
  {
    slug: "nestle-cooling-latte",
    title: "Nestlé Cooling Latte",
    type: "Packaging · FMCG",
    tag: "Launch",
    cover: "/portfolio/nestle-cooling-clean.png",
    heroImage: "/cases/nestle-cooling-latte/page-21.jpg",
    hideHero: true,
    overview: "A summer product launch built around the idea of ‘breaking through the ice.’ Nestlé’s familiar graphic language becomes the foundation of a refreshing iced-latte world, with the cup emerging directly from a crystalline frozen landscape.",
    pageRange: [21, 21],
  },
  {
    slug: "harbin-ice-beer",
    title: "Harbin Ice Beer",
    type: "Packaging · Beverage",
    tag: "Zero Sugar",
    cover: "/portfolio/harbin-home.png",
    heroImage: "/cases/harbin-ice-beer/page-22.jpg",
    hideHero: true,
    overview: "A packaging refresh marking Harbin Ice Beer’s transition to a zero-sugar product. The design preserves the brand’s established recognition while giving the line a sharper, more contemporary presence.",
    challenge: "Communicate the zero-sugar upgrade clearly without losing the familiarity or energy of the existing Harbin Ice Beer identity.",
    solution: "Refresh the original blue, yellow, and metallic packaging system, then introduce expressive brush elements to strengthen consistency across the broader Harbin Ice series.",
    pageRange: [22, 22],
  },
  {
    slug: "budweiser",
    title: "Budweiser",
    type: "Packaging · FMCG",
    tag: "China",
    cover: "/portfolio/budweiser.jpg",
    crop: "crop-center",
    heroImage: "/cases/budweiser/page-23.jpg",
    hideHero: true,
    overview: "A redesign of Budweiser’s outer cartons for the Chinese market. The work reconciles global and local visual guidelines while rebuilding the packaging around recognizable VBI elements.",
    pageRange: [23, 23],
  },
  {
    slug: "the-bicester-village",
    title: "The Bicester Village",
    type: "Advertising · Shopping",
    tag: "Year of the Pig",
    cover: "/portfolio/the-bicester-village-home.png",
    heroImage: "/cases/the-bicester-village/page-25.jpg",
    hideHero: true,
    overview: "A Chinese New Year campaign for Bicester Village, the London shopping destination that brings together more than 130 international luxury brands. Created for the Year of the Pig, the campaign features a festive pig character across digital promotions and seasonal communications.",
    pageRange: [25, 26],
  },
  {
    slug: "julee-julee",
    title: "Julee Julee",
    type: "Advertising · Luxury",
    tag: "H5 · Banner · Poster",
    cover: "/portfolio/julee-julee-home.png",
    heroImage: "/cases/julee-julee/page-27.jpg",
    hideHero: true,
    overview: "A digital advertising system for Julee Julee, a Chinese jewelry e-commerce brand. Traditional Chinese motifs create a contemporary seasonal aesthetic, while the brand’s signature green maintains a consistent identity across H5 experiences, banners, posters, and cards.",
    pageRange: [27, 30],
  },
  {
    slug: "ihg",
    title: "IHG",
    type: "Advertising · Hospitality",
    tag: "H5 · Banner · Poster",
    cover: "/portfolio/ihg-home.png",
    heroImage: "/cases/ihg/page-31.jpg",
    hideHero: true,
    overview: "A series of creative advertising campaigns for InterContinental Hotels Group, each developed around a distinct theme. Every direction translates a specific travel or work scenario into clear, engaging communications across H5 experiences, banners, and posters.",
    pageRange: [31, 33],
  },
  {
    slug: "heymarket",
    title: "Heymarket",
    type: "Advertising · Internet",
    tag: "H5 · Banner · Poster",
    cover: "/portfolio/heymarket-home.png",
    heroImage: "/cases/heymarket/page-34.jpg",
    hideHero: true,
    overview: "Advertising communications for Heymarket, a social shopping app focused on fashion-forward clothing for millennial audiences. The campaign combines energetic collage, bold typography, and interactive H5 formats to create a distinctive youth-culture presence.",
    pageRange: [34, 36],
  },
  {
    slug: "aviva-cofco",
    title: "Aviva-COFCO",
    type: "Brand Identity · Insurance",
    tag: "20th Anniversary",
    cover: "/portfolio/aviva-cofco-home.png",
    heroImage: "/cases/aviva-cofco/page-43.jpg",
    overview: "A refreshed brand identity marking Aviva-COFCO’s 20th anniversary in China. The system builds on existing brand equity, expresses the company’s culture more clearly, and adapts the identity for flexible digital communications.",
    challenge: "Express the company’s values through a distinctive brand language and build a younger, more interactive system for emerging digital channels.",
    solution: "Evolve recognizable brand assets into a differentiated communications system that can flex across physical, digital, and community-facing touchpoints.",
    concept: "WE SPACE—drawn from the relationship between Aviva-COFCO’s blue and yellow. Where the two colors meet, they create green and open a visual space for love, safety, care, home, and belonging.",
    pageRange: [38, 44],
  },
  {
    slug: "unilumin",
    title: "Unilumin",
    type: "Brand Identity · Technology",
    tag: "Global",
    cover: "/portfolio/unilumin.jpg",
    heroImage: "/cases/unilumin/page-48.jpg",
    overview: "A redefinition of Unilumin’s visual identity for a global leader in LED displays. The work clarifies the relationship between the group and its subsidiaries while creating a stronger, more strategic brand expression.",
    challenge: "Translate business strategy into a distinctive visual identity and build a cohesive system for integrated online and offline communications.",
    solution: "Launch the Double-U super symbol around the idea of ‘WE,’ supported by three flexible graphic behaviors designed for different channels and media.",
    pageRange: [45, 50],
  },
  {
    slug: "flexhub",
    title: "Flexhub",
    type: "Brand Identity · Mobility",
    tag: "CATL",
    cover: "/portfolio/flexhub.jpg",
    heroImage: "/cases/flexhub/page-55.jpg",
    overview: "A visual system for Flexhub, an integrated intelligent electric chassis developed by Contemporary Intelligent, a CATL subsidiary. The identity supports a future-facing mobility platform built around precision and flexibility.",
    challenge: "Reduce the product’s direct visual dependence on CATL while balancing engineering rigor with the more approachable language expected of intelligent technology.",
    solution: "Carry CATL’s blue brand DNA into a brighter palette, then use a precise, right-angled graphic language to express engineering structure and modularity.",
    concept: "Infinite Unknown—the X, a symbol of the unknown, combines with the chassis outline and the infinity symbol to express a flexible platform with open-ended possibilities.",
    pageRange: [51, 56],
  },
  {
    slug: "meione",
    title: "MEIONE",
    type: "Brand Identity · Internet",
    tag: "Omnichannel",
    cover: "/portfolio/meione-home-portrait.png",
    heroImage: "/cases/meione/hero.png",
    overview: "A unified brand system for the company behind high-profile live-commerce and public-interest initiatives. The identity presents MEIONE as energetic, warm, and consumer-centered across every channel.",
    challenge: "Translate the company’s values into a recognizable visual language and unify a rapidly growing portfolio of communications touchpoints.",
    solution: "Translate the brand slogan into a visual system and develop a fireworks-inspired graphic element derived from the logo, creating a friendly and energetic identity.",
    pageRange: [57, 61],
    galleryMedia: [
      { src: "/cases/meione/page-57.jpg", kind: "image", alt: "MEIONE brand identity application" },
      { src: "/cases/meione/page-58.jpg", kind: "image", alt: "MEIONE brand identity application" },
      { src: "/cases/meione/page-59.jpg", kind: "image", alt: "MEIONE brand identity application" },
      { src: "/cases/meione/page-60.jpg", kind: "image", alt: "MEIONE brand identity application" },
      { src: "/cases/meione/campaign-posters.png", kind: "image", alt: "MEIONE campaign poster designs" },
      { src: "/cases/meione/page-61.jpg", kind: "image", alt: "MEIONE brand identity application" },
    ],
  },
  {
    slug: "agricultural-bank-of-china",
    title: "Agricultural Bank of China",
    type: "Brand Identity · Finance",
    tag: "Digital",
    cover: "/portfolio/agricultural-bank-home.png",
    heroImage: "/cases/agricultural-bank-of-china/page-66.jpg",
    overview: "A visual identity refresh focused on consistency and digital adaptability for one of China’s largest state-owned banks. The work preserves the equity associated with the bank’s signature green while extending the system for contemporary financial services.",
    challenge: "Preserve the bank’s friendly, green-led recognition while strengthening its digital character and ensuring consistency across online and offline environments.",
    solution: "Retain the core green, introduce a supporting color palette, and derive a flexible graphic language directly from the logo.",
    concept: "Digital Wheat—the bank’s most recognizable wheat-ear motif expands from a single point through vibrant steps of color, creating movement and a distinctly digital rhythm.",
    pageRange: [62, 67],
  },
  {
    slug: "jump-dance-studio",
    title: "Jump Dance Studio",
    type: "Brand Identity · Culture",
    tag: "Shanghai",
    cover: "/portfolio/jump-dance.jpg",
    heroImage: "/cases/jump-dance-studio/page-70.jpg",
    overview: "A revitalized identity for a Shanghai dance education chain, reflecting a shift from dance as a specialist skill to dance as an energetic part of everyday life.",
    challenge: "Challenge traditional perceptions of the category and express the company’s values through a visual system designed for a younger audience.",
    solution: "Reframe the brand through bold typography, motion, and an ‘energetic magnetic field’ graphic that unifies physical and digital communications.",
    pageRange: [68, 71],
  },
  {
    slug: "pantanal-oppo",
    title: "Pantanal / OPPO",
    type: "Brand Identity · Software",
    tag: "ColorOS",
    cover: "/portfolio/pantanal-home.png",
    heroImage: "/cases/pantanal-oppo/page-74.jpg",
    overview: "A brand identity for Pantanal, the ColorOS middleware system designed to connect an open ecosystem of devices and services. The work supports OPPO’s evolution into an ecosystem-driven technology company.",
    challenge: "Communicate an international, technology-led cross-device operating system and evolve a technical status symbol into an icon with a broader ecosystem vision.",
    solution: "Create an open, dynamic symbol of connection that balances ecological warmth with the precision of digital intelligence.",
    pageRange: [72, 75],
  },
  {
    slug: "orthogonal",
    title: "Orthogonal",
    type: "Brand Identity · Software",
    tag: "3D",
    cover: "/portfolio/orthogonal.jpg",
    crop: "crop-tr",
    heroImage: "/cases/orthogonal/page-76.jpg",
    heroCrop: "crop-top",
    hideHero: true,
    overview: "A modernized brand for a browser-based graphical simulation tool used to model, simulate, and analyze dynamic systems. The refresh positions the product for technology markets in Europe and the United States.",
    solution: "Build a precise, modular identity around simulation and connection, supported by a clear product architecture spanning ODE tools and the Workshop and Playground experiences.",
    pageRange: [76, 77],
  },
  {
    slug: "smile-museum",
    title: "Smile Museum",
    type: "Artwork · Exhibition",
    tag: "UAL",
    cover: "/portfolio/smile-museum.jpg",
    heroImage: "/cases/smile-museum/page-81.jpg",
    overview: "An exhibition exploring the invisible emotions concealed within a smile. A series of art installations invites reflection and helps visitors understand the complexity behind a familiar expression.",
    concept: "The visual and spatial system moves between clinical observation and vivid emotional energy, using repeated mouth imagery, orange interventions, and tactile objects.",
    pageRange: [79, 81],
  },
  {
    slug: "money-bible",
    title: "Money Bible",
    type: "Artwork · Publication",
    tag: "UAL",
    cover: "/portfolio/money-bible-home.png",
    heroImage: "/cases/money-bible/page-83.jpg",
    heroCrop: "crop-left",
    overview: "A publication examining money as a near-universal belief system capable of crossing cultural divides. The project treats finance as a shared form of religion and materializes the idea as a ‘money bible.’",
    solution: "Translate economic symbols, ritual structures, and references to sacred books into a black-and-gold publication system defined by symbolic illustration and ceremonial tactility.",
    pageRange: [82, 83],
  },
  {
    slug: "sunmeet",
    title: "SUNMEET",
    type: "Illustration · Education",
    tag: "Identity",
    cover: "/portfolio/sunmeet.jpg",
    crop: "crop-tr",
    heroImage: "/cases/sunmeet/page-85.jpg",
    overview: "An illustration language for a children’s creative arts institution. The creatures sit between abstraction and recognition, combining familiar animal traits with imagination.",
    solution: "Use intentionally awkward, direct mark-making and a rich color palette to express children’s simplicity and innocence across branded environments and merchandise.",
    pageRange: [84, 87],
  },
  {
    slug: "aigc-packaging",
    title: "AIGC",
    type: "Midjourney · Packaging",
    tag: "Experiment",
    cover: "/portfolio/aigc-clean.png",
    heroImage: "/cases/aigc-packaging/page-91.jpg",
    hideHero: true,
    overview: "A collection of generative design experiments spanning ink illustration, Mid-Autumn Festival imagery, Chinese-inspired beverage packaging, and Stable Diffusion model training.",
    solution: "Use image-generation tools as an extension of art direction, exploring how cultural visual codes can move across illustration, packaging, and character design.",
    pageRange: [89, 92],
  },
];

const projectOrder = [
  "la-chapelle",
  "balini-coffee",
  "money-bible",
  "nestle-cooling-latte",
  "nana-jacqueline",
  "sunmeet",
  "julee-julee",
  "heymarket",
  "fanta",
  "harbin-ice-beer",
  "agricultural-bank-of-china",
  "flexhub",
  "budweiser",
  "jump-dance-studio",
  "the-bicester-village",
  "ihg",
  "aviva-cofco",
  "pantanal-oppo",
  "chinese-new-year-poster",
  "meione",
  "unilumin",
  "smile-museum",
  "orthogonal",
  "aigc-packaging",
] as const;

export const projects: Project[] = projectOrder.map((slug) => {
  const project = projectCatalog.find((item) => item.slug === slug);

  if (!project) {
    throw new Error(`Unknown project: ${slug}`);
  }

  return project;
});

export const trailImages = [
  "/portfolio/balini-coffee.jpg",
  "/portfolio/nestle-cooling-clean.png",
  "/portfolio/unilumin.jpg",
  "/portfolio/flexhub.jpg",
  "/portfolio/agricultural-bank.jpg",
  "/portfolio/jump-dance.jpg",
  "/portfolio/smile-museum.jpg",
  "/portfolio/aigc-clean.png",
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectImages(project: Project) {
  if (!project.pageRange) return [];

  const [first, last] = project.pageRange;
  return Array.from({ length: last - first + 1 }, (_, index) => {
    const page = String(first + index).padStart(2, "0");
    return `/cases/${project.slug}/page-${page}.jpg`;
  });
}
