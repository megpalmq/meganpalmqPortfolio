import { c as create_ssr_component, b as subscribe, d as add_attribute, g as each, f as escape } from "../../../chunks/ssr.js";
import { p as port } from "../../../chunks/portfolio.js";
import { p as page } from "../../../chunks/stores.js";
import { w as webProjects } from "../../../chunks/webProjects.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-j14626_START -->${$$result.title = `<title>Web Design Projects | Megan Palmquist</title>`, ""}<meta name="description" content="Explore web design and development projects by Megan Palmquist, featuring responsive websites, UI/UX design, front-end development, and interactive digital experiences."><meta property="og:title" content="Web Design Projects | Megan Palmquist"><meta property="og:description" content="Explore web design, UI/UX, front-end development, and interactive digital projects created by Megan Palmquist."><meta property="og:image"${add_attribute("content", port, 0)}><meta property="og:type" content="website"><meta property="og:site_name" content="Megan Palmquist Portfolio"><!-- HEAD_svelte-j14626_END -->`, ""} <div class="projects-wrapper projects-page web-grid" id="projects"> <div class="projects-header" data-parallax="0.08" data-svelte-h="svelte-1ti7pe9"><p class="web-title-kicker">Featured Work</p> <h1 class="reveal-title web-title" data-mask-reveal><span>Web</span> <span class="title-accent">Projects</span></h1> <p class="web-title-sub">Crafted interfaces, branded systems, and polished interactions.</p></div> <div class="projects-header-under"></div>  <div class="project-boxes">${each(webProjects, (project, index) => {
    return `<div class="project-box" role="link" tabindex="0"> <div class="project-media"><a${add_attribute("href", `/web-projects/${project.slug}`, 0)}${add_attribute("aria-label", `View ${project.title} project`, 0)} data-svelte-h="svelte-12xad2c"><img${add_attribute("src", project.heroImage, 0)}${add_attribute("alt", project.heroAlt, 0)} loading="lazy" decoding="async"> </a></div>  <div class="project-desc">  <div class="project-title-row"><div class="project-title"><h3>${escape(project.title)} </h3></div> <div class="project-actions">${project.githubUrl ? `<a${add_attribute("href", project.githubUrl, 0)} class="github" target="_blank" rel="noopener noreferrer"${add_attribute("aria-label", `View ${project.title} on GitHub`, 0)} data-svelte-h="svelte-1glietr"><i class="fa-brands fa-github"></i> </a>` : ``} ${project.caseStudyUrl ?? project.liveUrl ? `<a${add_attribute("href", project.caseStudyUrl ?? project.liveUrl, 0)} class="arrow-link" target="_blank" rel="noopener noreferrer"${add_attribute("aria-label", `Open ${project.title}`, 0)} data-svelte-h="svelte-1duqde0"><i class="fa-solid fa-arrow-up-right-from-square"></i> </a>` : ``} </div></div>  <p class="date">${escape(project.date)}</p>  <p class="desc">${escape(project.summary)}</p>  <a class="learn-more"${add_attribute("href", `/web-projects/${project.slug}`, 0)} data-svelte-h="svelte-6btqhm">View project

            <i class="fa-solid fa-arrow-right"></i></a>  <div class="project-skills">${each(project.highlights, (skill) => {
      return `<span>${escape(skill)} </span>`;
    })} </div></div> </div>`;
  })}</div></div>  <div class="aboutme" data-svelte-h="svelte-1ngga2d"><a href="/graphic-projects" class="aboutme-link">See Graphic Work

    <i class="fa-solid fa-arrow-right"></i></a></div>`;
});
export {
  Page as default
};
