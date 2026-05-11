import Osaka from "$lib/images/Osaka.jpg";
import PB from "$lib/images/pb.png";
import LI from "$lib/images/LI.png";
import TF from "$lib/images/TF.png";
import LO from "$lib/images/LO.png";
import bran from "$lib/images/bran.png";
import FD from "$lib/images/FreezeDry.png";
import FOV from "$lib/images/FOV.png";
import yonsei from "$lib/images/yonsei.png";
import yonseiLarge from "$lib/images/yonseiL.png";
import happy from "$lib/images/happy.png";

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
    ],
    overview:
      "This project explored how a global sports event could feel rooted in a specific place. I developed a logo, brochure, poster, pattern system, event tickets, lanyard, and website mockup so the identity could live consistently across print and digital touchpoints.",
    sections: [
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
  {
    slug: "the-happiness-project",
    title: "The Happiness Project",
    date: "Fall 2024",
    category: "Book Design",
    summary:
      "A booklet designed to explain panic attacks with empathy, clarity, and supportive visual pacing.",
    heroImage: happy,
    heroAlt: "The Happiness Project booklet",
    accent: "#c86fff",
    highlights: ["Indesign", "Typography", "Adobe Creative Suite"],
    overview:
      "This booklet-style project was designed as an educational resource. The visual structure needed to feel compassionate while still making the information easy to follow.",
    sections: [
      {
        label: "Intent",
        title: "A calm reading experience for a sensitive topic",
        copy: "I focused on keeping the layout approachable, with generous spacing and clear sectional breaks so the reader could move through the content without feeling rushed.",
      },
      {
        label: "Design",
        title: "A booklet built around guidance and support",
        copy: "The typography and composition were chosen to make the information feel reassuring and organized. The project aims to educate while also offering a sense of care.",
      },
      {
        label: "Takeaway",
        title: "Editorial design with a practical purpose",
        copy: "The finished piece shows how a small-format publication can help translate complex emotional information into something readable and useful.",
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
