import port from "$lib/images/portfolio.png";
import keurig from "$lib/images/keurig.png";
import DFD from "$lib/images/DFD.png";
import BL from "$lib/images/bloodletting.png";
import PTR from "$lib/images/pb.png";
import DT from "$lib/images/DT.png";
import thomasF from "$lib/images/thomasfielding.png";
import windcombe from "$lib/images/windcombe.png";
import windcombePdf from "$lib/images/windcombe.pdf";
import ap from "$lib/images/ap.png";

export const webProjects = [
  {
    slug: "dream-team",
    title: "Dream Team",
    date: "Fall 2025",
    category: "Web App",
    summary:
      "Dream Team is an interactive Pacers fan web app I designed and developed to let users build their ideal starting lineup, explore a roster pulled from an API, and play a daily Stat Match puzzle.",
    heroImage: DT,
    heroAlt: "Dream Team website",
    liveUrl: "https://n423-6048d.web.app/",
    githubUrl: "https://github.com/n423DreamTeam/dreamTeamPRT2Laptop",
    highlights: ["HTML", "CSS", "JavaScript", "API", "UI", "Graphic Design"],
    overview:
      "Dream Team includes a chat feature, rewards, account system, and custom graphics. The project demonstrates front-end development, UI/UX design, API integration, and cohesive branding for a digital product.",
    sections: [
      {
        label: "Description",
        title: "Dream Team overview",
        copy:
          "Dream Team is an interactive Pacers fan web app I designed and developed to let users build their ideal starting lineup, explore a roster pulled from an API, and play a daily Stat Match puzzle.",
      },
    ],
  },
  {
    slug: "patriotism-reimagined",
    title: "Patriotism Reimagined",
    date: "Spring 2026",
    category: "Interactive Site",
    summary:
      "An interactive, visually driven website exploring modern interpretations of patriotism through storytelling, design, and digital experiences.",
    heroImage: ap,
    heroAlt: "Patriotism Reimagined website",
    liveUrl: "https://www.patriotismreimagined.com/",
    githubUrl: "https://github.com/megpalmq/PatriotismReimagined",
    highlights: ["SCSS", "HTML", "JavaScript", "jQuery"],
    overview:
      "I designed and developed this site using React.js and modern frontend practices, implementing custom layouts, animations, responsive design, and immersive interactions to support the project's message.",
    sections: [
      {
        label: "Description",
        title: "Patriotism Reimagined overview",
        copy:
          "An interactive, visually driven website exploring modern interpretations of patriotism through storytelling, design, and digital experiences.",
      },
    ],
  },
  {
    slug: "design-for-dignity",
    title: "Design For Dignity",
    date: "Spring 2025",
    category: "Nonprofit Site",
    summary:
      "A collaborative site showcasing design solutions that promote dignity and accessibility, with a thoughtful frontend and a seamless backend.",
    heroImage: DFD,
    heroAlt: "Design for Dignity website",
    liveUrl: "https://design-for-dignity.vercel.app/",
    githubUrl: "https://github.com/megpalmq/DesignForDignity",
    highlights: ["SCSS", "HTML", "JavaScript", "jQuery"],
    overview:
      "The site highlights the initiative's mission, projects, and impact, serving as a platform for meaningful design work aimed at improving lives.",
    sections: [
      {
        label: "Description",
        title: "Design For Dignity overview",
        copy:
          "A collaborative site showcasing design solutions that promote dignity and accessibility, with a thoughtful frontend and a seamless backend.",
      },
    ],
  },
  {
    slug: "thomas-fielding",
    title: "Portfolio & E-Commerce Site",
    date: "Summer 2025",
    category: "WordPress / E-Commerce",
    summary:
      "A redesign and e-commerce integration for Thomas Fielding that included a dynamic watermark system for sold sheet music.",
    heroImage: thomasF,
    heroAlt: "Thomas Fielding site",
    liveUrl: "https://www.thomasfielding.com/",
    highlights: ["WordPress", "E-Commerce Integration (WooCommerce)", "Client Engagement"],
    overview:
      "I refreshed the portfolio layout and integrated an e-commerce solution to sell sheet music while protecting products with dynamic watermarking.",
    sections: [
      {
        label: "Description",
        title: "Portfolio & E-Commerce overview",
        copy:
          "A redesign and e-commerce integration for Thomas Fielding that included a dynamic watermark system for sold sheet music.",
      },
    ],
  },
  {
    slug: "windcombe",
    title: "Windcombe",
    date: "Fall 2025",
    category: "Community Site",
    summary:
      "A redesigned WordPress site for the Windcombe Neighborhood Association transformed into an interactive community hub with accounts, a community board, and neighborhood map.",
    heroImage: windcombe,
    heroAlt: "Windcombe website",
    secondaryPdf: windcombePdf,
    secondaryAlt:
      "Windcombe PDF case study showing the site's key sections and design focus",
    secondaryVideo: "/WindcombeVideo.mp4",
    liveUrl: "https://windcombe.com/",
    caseStudyUrl: "https://www.behance.net/gallery/248254721/Windcombe",
    highlights: ["WordPress", "Client Engagement", "Branding", "Typography"],
    overview:
      "The site organizes announcements, events, and resources to improve accessibility and engagement for residents.",
    sections: [
      {
        label: "Description",
        title: "Windcombe overview",
        copy:
          "A redesigned WordPress site for the Windcombe Neighborhood Association transformed into an interactive community hub with accounts, a community board, and neighborhood map.",
      },
    ],
  },
  {
    slug: "bloodletting",
    title: "Bloodletting",
    date: "Summer 2025",
    category: "Promotional Site",
    summary:
      "An atmospheric site for Witless Crusade Games' board game Bloodletting, featuring immersive visuals and smooth scroll animations.",
    heroImage: BL,
    heroAlt: "Bloodletting website",
    liveUrl: "https://bloodletting.vercel.app/",
    githubUrl: "https://github.com/megpalmq/bloodletting",
    highlights: ["HTML5", "CSS", "JavaScript", "Responsive Design", "UI Animation"],
    overview:
      "The site showcases the game's factions with distinctive imagery and motion to reflect their identities and create an engaging online showcase.",
    sections: [
      {
        label: "Description",
        title: "Bloodletting overview",
        copy:
          "An atmospheric site for Witless Crusade Games' board game Bloodletting, featuring immersive visuals and smooth scroll animations.",
      },
    ],
  },
];

export const webProjectsBySlug = Object.fromEntries(
  webProjects.map((project) => [project.slug, project]),
);

export function getWebProjectNavigation(slug) {
  const currentIndex = webProjects.findIndex((p) => p.slug === slug);

  if (currentIndex === -1) {
    return { previous: null, next: null };
  }

  return {
    previous: webProjects[currentIndex - 1] ?? null,
    next: webProjects[currentIndex + 1] ?? null,
  };
}
