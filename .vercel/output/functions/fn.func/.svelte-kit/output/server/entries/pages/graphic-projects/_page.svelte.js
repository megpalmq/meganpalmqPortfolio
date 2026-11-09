import { c as create_ssr_component, b as subscribe, d as add_attribute, g as each, f as escape } from "../../../chunks/ssr.js";
import { p as port } from "../../../chunks/portfolio.js";
import { O as Osaka, F as FD, y as yonsei } from "../../../chunks/FreezeDry.js";
import { k as kozen } from "../../../chunks/kouki.js";
import { p as page } from "../../../chunks/stores.js";
const sunny = "/_app/immutable/assets/sunny.XwU5ztW_.png";
const atrium = "/_app/immutable/assets/AH.vLVAWPQz.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const graphicProjects = [
    {
      title: "Osaka 2036 Olympics",
      slug: "osaka-2036-olympics",
      image: Osaka,
      alt: "Osaka 2036 Olympics design project",
      date: "Spring 2025",
      description: "I developed a complete brand identity for the Osaka Olympics, including a logo, print materials, merchandise, and website mockup, inspired by the city's culture, traditional art, and modern innovation to create a visually compelling and authentic Olympic brand.",
      skills: ["Branding", "Indesign", "Figma", "Illustrator", "Typography"]
    },
    {
      title: "Atrium House",
      slug: "atrium-house",
      image: atrium,
      alt: "Atrium House branding project",
      date: "Spring 2026",
      description: "Atrium House is a luxury hospitality brand inspired by the elegance of boutique hotels and the cultural atmosphere of contemporary art museums, featuring refined typography, rich plum and olive tones, and immersive branding across signage, packaging, and guest experience materials.",
      skills: ["Branding", "Product Design", "Illustrator", "Typography"]
    },
    {
      title: "Kozen Skincare",
      slug: "kozen-skincare",
      image: kozen,
      alt: "Kozen skincare branding project",
      date: "Spring 2026",
      description: "A skincare brand identity that pairs clean typography, soft color, and minimal packaging for a calm, premium feel.",
      skills: ["Branding", "Packaging", "Illustrator", "Typography"]
    },
    {
      title: "Freeze Dried",
      slug: "freeze-dried",
      image: FD,
      alt: "Freeze Dried branding project",
      date: "Spring 2025",
      description: "For this branding and packaging project, I created a playful and vibrant identity for a freeze-dried candy brand using icy colors, dynamic typography, and bold packaging design to capture the product's fun, airy texture and appeal to a youthful audience.",
      skills: ["Branding", "Product Design", "Illustrator", "Typography"]
    },
    {
      title: "Sun Drift",
      slug: "sun-drift",
      image: sunny,
      alt: "Sun Drift music festival brand identity and schedule design",
      date: "Fall 2024",
      description: "Sun Drift is a conceptual music festival set in Joshua Tree, California. I developed a complete visual identity that combines expressive typography, psychedelic patterns, and a bold color palette to capture the energy of an outdoor music festival. The identity was designed as a flexible system that could stay recognizable across promotional, informational, environmental, and wearable applications.",
      skills: ["Indesign", "Illustrator", "Typography"]
    },
    {
      title: "Yonsei x Herron",
      slug: "yonsei-x-herron",
      image: yonsei,
      alt: "Yonsei x Herron infographic",
      date: "Fall 2023",
      description: "A typography-driven design project that explores the collaboration between Yonsei University and Herron School of Art and Design. The project is 2 infographic posters that talk about food insecurity in Seoul, South Korea and Indianapolis, Indiana.",
      skills: ["Indesign", "Illustrator", "Typography"]
    }
  ];
  $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1i7syln_START -->${$$result.title = `<title>Graphic Design Projects | Megan Palmquist</title>`, ""}<meta name="description" content="Explore graphic design projects by Megan Palmquist, featuring branding, typography, packaging, print design, and visual storytelling."><meta property="og:title" content="Graphic Design Projects | Megan Palmquist"><meta property="og:description" content="Explore branding, typography, packaging, print, and visual design projects created by Megan Palmquist."><meta property="og:image"${add_attribute("content", port, 0)}><meta property="og:type" content="website"><meta property="og:site_name" content="Megan Palmquist Portfolio"><!-- HEAD_svelte-1i7syln_END -->`, ""} <div class="projects-wrapper projects-page graphic-grid" id="projects"> <div class="projects-header" data-svelte-h="svelte-1ha64bf"><p class="web-title-kicker">Featured Work</p> <h1 class="web-title"><span>Graphic</span> <span class="title-accent">Projects</span></h1> <p class="web-title-sub">Brand systems, editorial layouts, and visual storytelling.</p> <p class="header-detail">Built with intention</p></div> <div class="projects-header-under"></div>  <div class="project-boxes">${each(graphicProjects, (project, index) => {
    return `<div class="project-box" role="link" tabindex="0"> <div class="project-media"><a${add_attribute("href", `/graphic-projects/${project.slug}`, 0)}${add_attribute("aria-label", `View ${project.title} project`, 0)}><img${add_attribute("src", project.image, 0)}${add_attribute("alt", project.alt, 0)} loading="lazy" decoding="async"> </a></div>  <div class="project-desc">  <div class="project-title-row"><div class="project-title"><h3>${escape(project.title)} </h3></div> <div class="project-actions"><a${add_attribute("href", `/graphic-projects/${project.slug}`, 0)} class="arrow-link"${add_attribute("aria-label", `Open ${project.title}`, 0)}><i class="fa-solid fa-arrow-up-right-from-square"></i></a> </div></div>  <p class="date">${escape(project.date)}</p>  <p class="desc">${escape(project.description)}</p>  <a class="learn-more"${add_attribute("href", `/graphic-projects/${project.slug}`, 0)}>View project

            <i class="fa-solid fa-arrow-right"></i></a>  <div class="project-skills">${each(project.skills, (skill) => {
      return `<span>${escape(skill)} </span>`;
    })} </div></div> </div>`;
  })}</div></div>  <div class="aboutme" data-svelte-h="svelte-4g64nd"><a href="/web-projects" class="aboutme-link">See Web Work

    <i class="fa-solid fa-arrow-right"></i></a></div>`;
});
export {
  Page as default
};
