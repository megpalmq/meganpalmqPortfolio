import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { p as port } from "../../../chunks/portfolio.js";
import { p as page } from "../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let currentUrl;
  if (currentUrl == "/") {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  currentUrl = $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-160wbps_START -->${$$result.title = `<title>Megan Palmquist | Web Design &amp; Graphic Design Portfolio</title>`, ""}<meta name="description" content="Megan Palmquist's portfolio of custom websites, branding, front-end development, and visual design."><meta property="og:title" content="Megan Palmquist | Web Design & Graphic Design Portfolio"><meta property="og:description" content="Web design, branding, graphic design, and digital experiences by Megan Palmquist."><meta property="og:image"${add_attribute("content", port, 0)}><meta property="og:type" content="website"><meta property="og:site_name" content="Megan Palmquist Portfolio"><!-- HEAD_svelte-160wbps_END -->`, ""} <div class="home-wrapper" id="home" data-svelte-h="svelte-1wmfdrw"><div class="home-desc-wrapper"><div class="home-desc"><div class="home-desc-container hiddenbottom2"><p class="intro">Hi, welcome to</p> <h1>Megan Palmquist.</h1> <h1>I am a <span>web developer/ graphic designer/ and UX/UI designer</span>,</h1> <h1 class="dev-desc">dedicated to crafting <span>engaging</span> and
          <span>meaningful</span> digital experiences.</h1></div></div></div></div> <div class="projects-wrapper" id="projects" data-svelte-h="svelte-i74w8b"><div class="projects-header"><h1>My Projects</h1></div> <div class="projects-header-under"></div></div> <div class="socials hidden" data-svelte-h="svelte-1xtwl24"><div class="social-box"><a href="https://www.linkedin.com/in/megan-palmquist/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://github.com/megpalmq" target="_blank"><i class="fa-brands fa-github"></i></a> <a href="https://www.instagram.com/megannstone_/" target="_blank"><i class="fa-brands fa-instagram"></i></a></div></div>`;
});
export {
  Page as default
};
