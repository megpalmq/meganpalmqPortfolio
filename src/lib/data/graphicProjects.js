import Osaka from "$lib/images/Osaka.jpg";
import brochureFront from "$lib/images/brochurefront.png";
import brochureBack from "$lib/images/brochureback.png";
import OsakaPoster from "$lib/images/Osaka2036Poster.jpg";
import ticketsOsaka from "$lib/images/ticketsOsaka.png";
import lanyard from "$lib/images/lanyard.png";
import PB from "$lib/images/pb.png";
import LI from "$lib/images/LI.png";
import TF from "$lib/images/TF.png";
import LO from "$lib/images/LO.png";
import bran from "$lib/images/bran.png";
import FD from "$lib/images/FreezeDry.png";
import FOV from "$lib/images/FOV.png";
import yonsei from "$lib/images/yonsei.png";
import AH from "$lib/images/atrium.jpg";
import yonseiLarge from "$lib/images/yonseiL.png";
import happy from "$lib/images/happy.png";
import kozenHero from "$lib/images/Koukibehance.jpg";

function createPlaceholderArtwork(title, subtitle, colorA, colorB) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#g)" rx="48" />
      <circle cx="980" cy="170" r="180" fill="rgba(255,255,255,0.16)" />
      <circle cx="220" cy="700" r="220" fill="rgba(255,255,255,0.12)" />
      <rect x="100" y="110" width="1000" height="680" rx="36" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" />
      <text x="100" y="156" fill="rgba(255,255,255,0.82)" font-family="Arial, sans-serif" font-size="34" font-weight="700" letter-spacing="4">FILL-IN</text>
      <text x="100" y="360" fill="#ffffff" font-family="Arial, sans-serif" font-size="92" font-weight="700">${title}</text>
      <text x="100" y="434" fill="rgba(255,255,255,0.9)" font-family="Arial, sans-serif" font-size="38">${subtitle}</text>
      <text x="100" y="750" fill="rgba(255,255,255,0.72)" font-family="Arial, sans-serif" font-size="30">Temporary mockup placeholder</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const graphicProjects = [
  {
    slug: "osaka-2036-olympics",
    title: "Osaka 2036 Olympics",
    date: "Spring 2025",
    category: "Brand Identity",
    summary:
      "A full Olympic identity system inspired by Osaka's culture, cityscape, and blend of tradition and modern innovation.",
    heroImage: Osaka,
    heroAlt: "Osaka 2036 Olympics design project",
    accent: "#f1a24f",
    highlights: ["Branding", "Indesign", "Figma", "Illustrator", "Typography"],
    videoSrc: "/LogoAni2.mp4",
    videoPoster: Osaka,
    iframeSrc:
      "https://www.figma.com/proto/ZUGoyihtPBPmJ3gq4ZXDtO/OsakaOlympicWebsite?node-id=3-2&p=f&t=othINy6y5pBhd4ns-0&scaling=contain&content-scaling=fixed&page-id=0%3A1",
    iframeTitle: "Osaka 2036 Olympics website mockup",
    gallery: [
      {
        src: PB,
        alt: "Osaka 2036 Olympics main presentation board",
      },
      {
        src: LI,
        alt: "Logo Iteration Image",
      },
      {
        src: TF,
        alt: "Typeface",
        caption: "Tickets and lanyard placeholder",
      },
      {
        src: LO,
        alt: "Placeholder pattern study for Osaka 2036 Olympics",
        caption: "Pattern and branding placeholder",
      },
      {
        src: bran,
        alt: "Placeholder pattern study for Osaka 2036 Olympics",
        caption: "Pattern and branding placeholder",
      },
      {
        src: brochureFront,
        alt: "Osaka 2036 Olympics brochure (front)",
        caption: "Brochure — front",
      },
      {
        src: brochureBack,
        alt: "Osaka 2036 Olympics brochure (back)",
        caption: "Brochure — back",
      },
      {
        src: OsakaPoster,
        alt: "Osaka 2036 Olympics poster",
        caption: "Poster",
        class: "is-poster",
      },
      {
        src: ticketsOsaka,
        alt: "Osaka 2036 event tickets",
        caption: "Tickets",
      },
      {
        src: lanyard,
        alt: "Event lanyard and pass",
        caption: "Lanyard",
      },
    ],
    overview:
      "This project explored how a global sports event could feel rooted in a specific place. I developed a logo, brochure, poster, pattern system, event tickets, lanyard, and website mockup so the identity could live consistently across print and digital touchpoints.",
    sections: [
      {
        label: "Description",
        title: "Osaka 2036 Olympics overview",
        copy:
          "For this project, I created a complete brand identity for the Olympics in Osaka, Japan. I began by studying Osaka's culture, history, and design influences. The project included designing a logo, brochure, poster, custom pattern, event tickets, lanyard, and website mockup. Drawing inspiration from Osaka's cityscape, traditional art, and modern innovation, the branding captures the city's essence and the spirit of the Olympic Games, resulting in a visually compelling and culturally authentic brand.",
      },
      {
        label: "Concept",
        title: "A city-led identity for a global event",
        copy: "I began by studying Osaka's visual language, historical references, and contemporary design cues. The goal was to create a system that felt celebratory without losing the character of the city behind it.",
      },
      {
        label: "System",
        title: "Flexible components that stay recognizable",
        copy: "The logo, custom pattern, and supporting graphics were designed to work as a family. That allowed the identity to scale from a poster headline to smaller materials like tickets and lanyards without losing cohesion.",
      },
      {
        label: "Outcome",
        title: "A polished Olympic brand built for multiple applications",
        copy: "The final presentation shows how the visual system adapts across formats while still feeling anchored in Osaka's energy, architecture, and cultural identity.",
      },
    ],
  },
  {
    slug: "atrium-house",
    title: "Atrium House",
    date: "Spring 2026",
    category: "Brand Identity",
    summary:
      "A luxury hotel and museum brand identity designed to blend immersive art experiences with refined, contemporary hospitality.",

    heroImage: AH,
    heroAlt: "Atrium House branding project",
    accent: "#6cb8ff",
    highlights: ["Branding", "Logo Design", "Illustrator", "Typography"],
    overview:
      "Atrium House is a conceptual branding project for a luxury hotel and museum experience centered around art, creativity, and immersive hospitality. The project focused on creating a cohesive visual identity that feels elegant, modern, and welcoming while appealing to creatively curious travelers and art enthusiasts.",
    sections: [
      {
        label: "Description",
        title: "Atrium House overview",
        copy:
          "",
      },
      {
        label: "Concept",
        title: "A hotel with a refined and contemporary atmosphere",
        copy: "The concept behind Atrium House was to blend the sophistication of a high-end hotel with the cultural atmosphere of a contemporary art museum. I developed a refined identity system using elegant typography, rich plum tones, muted olive green accents, and minimal layouts to create a balance between luxury and artistic expression. The branding extends across environmental graphics, signage, packaging, and hospitality materials to create a fully immersive guest experience,"
      },
      {
        label: "Result",
        title: "An elegant identity that feels sophisticated and memorable",
        copy: "The final outcome was a complete brand identity system that successfully communicates creativity, refinement, and comfort through both digital and physical applications. This project strengthened my skills in branding, typography, visual storytelling, and mockup presentation while showcasing my ability to create a cohesive and immersive design experience.",
      },
    ],
  },
  {
    slug: "kozen-skincare",
    title: "Kozen Skincare",
    date: "Spring 2026",
    category: "Brand Identity",
    summary:
      "A skincare brand identity that pairs clean typography, soft color, and minimal packaging for a calm, premium feel.",
    heroImage: kozenHero,
    heroAlt: "Kozen Skincare branding project",
    accent: "#8fb8a4",
    highlights: ["Branding", "Packaging", "Illustrator", "Typography"],
    overview:
      "Kozen Skincare explores how a beauty brand can feel approachable and elevated at the same time. I focused on building a clear visual system that could carry across packaging, product storytelling, and supporting brand materials.",
    sections: [
      {
        label: "Description",
        title: "Kozen Skincare overview",
        copy:
          "For Kozen Skincare, I developed a brand identity centered on clarity, softness, and balance. The project was designed to feel modern and thoughtful, with packaging and graphics that communicate care, simplicity, and everyday luxury.",
      },
      {
        label: "Concept",
        title: "A calm, premium beauty brand",
        copy:
          "The concept behind Kozen was to create a skincare identity that feels clean without becoming sterile. I used restrained type, natural tones, and generous spacing to give the brand a calm presence that still feels polished and intentional.",
      },
      {
        label: "Packaging",
        title: "Minimal surfaces with room for the product to lead",
        copy:
          "The packaging system prioritizes hierarchy and simplicity so the product names and benefits remain easy to read. That structure helps the brand scale across different skincare items while keeping the line visually cohesive.",
      },
      {
        label: "Result",
        title: "A flexible identity that feels refined and approachable",
        copy:
          "The final direction gives Kozen a steady visual voice that could translate across boxes, bottles, presentation boards, and digital touchpoints. It reflects a skincare brand that is clean, calm, and visually memorable.",
      },
    ],
  },
  {
    slug: "freeze-dried",
    title: "Freeze Dried",
    date: "Spring 2025",
    category: "Packaging + Branding",
    summary:
      "A playful candy brand identity built around icy color, bold type, and packaging that stands out on shelf.",
    heroImage: FD,
    heroAlt: "Freeze Dried branding project",
    accent: "#6cb8ff",
    highlights: ["Branding", "Product Design", "Illustrator", "Typography"],
    overview:
      "I designed the identity for a freeze-dried candy brand with the goal of making it feel fun, energetic, and instantly recognizable. The visual direction leans into cool tones and dynamic lettering to echo the texture and personality of the product.",
    sections: [
      {
        label: "Description",
        title: "Freeze Dried overview",
        copy:
          "For this branding and packaging project, I designed a playful and vibrant identity for a freeze-dried candy brand. Inspired by the cool, frozen process of freeze-drying, I focused on using icy colors and dynamic typography to reflect the candy's light, airy texture. The packaging design features bold, modern elements that stand out on shelves, aiming to capture the fun and refreshing qualities of the product. This project showcases my ability to create engaging, eye-catching designs that connect with a youthful audience.",
      },
      {
        label: "Concept",
        title: "A candy brand with a cold, crisp personality",
        copy: "The brand direction took inspiration from the freeze-drying process itself. That idea guided the palette, shapes, and type treatment so the packaging feels crisp, lightweight, and modern.",
      },
      {
        label: "Packaging",
        title: "Bold shelf presence with a clean system underneath",
        copy: "The package design balances playful movement with clear structure. Strong hierarchy and repeating brand elements keep the line consistent across front-facing panels and supporting materials.",
      },
      {
        label: "Result",
        title: "A youthful identity that feels bright and memorable",
        copy: "The final project presents a brand system that can expand across product flavors while still feeling cohesive and visually distinct.",
      },
    ],
  },
  {
    slug: "fragments-of-vulnerability",
    title: "Fragments of Vulnerability",
    date: "Fall 2024",
    category: "Editorial Design",
    summary:
      "A typography-driven zine that uses layout and scale to tell a difficult real-world story with care.",
    heroImage: FOV,
    heroAlt: "Fragments of Vulnerability zine",
    accent: "#d45f7f",
    highlights: ["Indesign", "Illustrator", "Typography"],
    overview:
      "This zine project centers typography as the primary storytelling tool. I designed the pages to guide viewers through an emotional narrative while keeping the reading experience thoughtful and legible.",
    sections: [
      {
        label: "Description",
        title: "Fragments of Vulnerability overview",
        copy:
          "The Vulnerability Zine is a typography-focused project that tells the powerful, real-life story of an individual affected by human trafficking. Through expressive typography and design, the zine captures the emotional depth of the experience, using visual storytelling to raise awareness and foster empathy for those impacted by this issue.",
      },
      {
        label: "Approach",
        title: "Typography as the emotional voice",
        copy: "The layout uses scale, pacing, and contrast to reflect the intensity of the subject matter. Type carries the message first, with composition doing much of the emotional work.",
      },
      {
        label: "Structure",
        title: "Editorial rhythm that balances tension and clarity",
        copy: "I organized the zine to move between dense, expressive moments and quieter breathing space. That rhythm helps the content remain powerful without becoming visually overwhelming.",
      },
      {
        label: "Impact",
        title: "A sensitive project shaped for reflection",
        copy: "The final book is meant to be read closely. The design supports empathy and awareness by giving the story a clear visual cadence.",
      },
    ],
  },
  {
    slug: "yonsei-x-herron",
    title: "Yonsei x Herron",
    date: "Fall 2023",
    category: "Infographic Design",
    summary:
      "A pair of typography-led infographic posters connecting food insecurity in Seoul and Indianapolis.",
    heroImage: yonseiLarge,
    heroAlt: "Yonsei x Herron infographic poster",
    accent: "#7b8dff",
    highlights: ["Indesign", "Illustrator", "Typography"],
    overview:
      "This project compares two cities through a set of infographic posters. I focused on organizing information in a clear hierarchy so the visual system could support the data without hiding the message.",
    secondaryImage: yonsei,
    secondaryAlt: "Yonsei x Herron poster detail",
    sections: [
      {
        label: "Description",
        title: "Yonsei x Herron overview",
        copy:
          "A typography-driven design project that explores the collaboration between Yonsei University and Herron School of Art and Design. The project is 2 infographic poster that talk about food insecurity in Seoul South Korea and Indianapolis Indiana.",
      },
      {
        label: "Data",
        title: "Two cities, one visual conversation",
        copy: "The project looks at food insecurity in Seoul, South Korea and Indianapolis, Indiana. I translated the research into infographic layouts that keep the information readable while still feeling designed.",
      },
      {
        label: "Typography",
        title: "A structured layout that lets the copy breathe",
        copy: "Strong typographic hierarchy was essential because the posters needed to communicate quickly. Headlines, statistics, and supporting text were arranged to guide the viewer through the comparison.",
      },
      {
        label: "Presentation",
        title: "A pair of posters built to stand alone and work together",
        copy: "Each poster can be viewed individually, but the system is most effective when the two pieces are read as a matched set.",
      },
    ],
  },
];

export const graphicProjectsBySlug = Object.fromEntries(
  graphicProjects.map((project) => [project.slug, project]),
);

export function getGraphicProjectNavigation(slug) {
  const currentIndex = graphicProjects.findIndex(
    (project) => project.slug === slug,
  );

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: graphicProjects[currentIndex - 1] ?? null,
    next: graphicProjects[currentIndex + 1] ?? null,
  };
}
