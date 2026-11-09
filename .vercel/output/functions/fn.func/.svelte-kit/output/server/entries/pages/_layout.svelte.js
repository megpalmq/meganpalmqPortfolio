import { c as create_ssr_component, b as subscribe, d as add_attribute, e as add_classes, v as validate_component, f as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
function normalizePath(path) {
  return path.replace(/\/+$/, "") || "/";
}
function isActive(path, route) {
  const normalizedPath = normalizePath(path);
  if (route === normalizedPath) {
    return true;
  }
  if (path !== "/" && route.startsWith(`${normalizedPath}/`)) {
    return true;
  }
  return false;
}
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentRoute;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  currentRoute = normalizePath($page.url.pathname);
  $$unsubscribe_page();
  return `<div class="nav-holder"><div class="black-box"></div> <div class="logo" data-svelte-h="svelte-ca2l4j"><a href="/"><p class="reg-logo">Megan <span>Palmquist</span></p> <p class="mobile-logo">M<span>P</span></p></a></div> <nav><ul><li><a href="/web-projects" class="${["nav-links", isActive("/web-projects", currentRoute) ? "active" : ""].join(" ").trim()}"${add_attribute(
    "aria-current",
    isActive("/web-projects", currentRoute) ? "page" : void 0,
    0
  )}>Web Projects</a></li> <li><a href="/graphic-projects" class="${[
    "nav-links",
    isActive("/graphic-projects", currentRoute) ? "active" : ""
  ].join(" ").trim()}"${add_attribute(
    "aria-current",
    isActive("/graphic-projects", currentRoute) ? "page" : void 0,
    0
  )}>Graphic Design Projects</a></li> <li><a href="/about" class="${["nav-links", isActive("/about", currentRoute) ? "active" : ""].join(" ").trim()}"${add_attribute("aria-current", isActive("/about", currentRoute) ? "page" : void 0, 0)}>About</a></li> <li><a href="/resume" class="${["resume-link button-pulse", isActive("/resume", currentRoute) ? "active" : ""].join(" ").trim()}"${add_attribute("aria-current", isActive("/resume", currentRoute) ? "page" : void 0, 0)}>Résumé</a></li></ul></nav> <div class="hamburger-icon" id="mobilebutton"><div class="bar1"></div> <div class="bar2"></div> <div class="bar3"></div> <ul class="mobile-menu"><li${add_classes((isActive("/web-projects", currentRoute) ? "active-item" : "").trim())}><a href="/web-projects" class="${["nav-links", isActive("/web-projects", currentRoute) ? "active" : ""].join(" ").trim()}"${add_attribute(
    "aria-current",
    isActive("/web-projects", currentRoute) ? "page" : void 0,
    0
  )}>Web Projects</a></li> <li${add_classes((isActive("/graphic-projects", currentRoute) ? "active-item" : "").trim())}><a href="/graphic-projects" class="${[
    "nav-links",
    isActive("/graphic-projects", currentRoute) ? "active" : ""
  ].join(" ").trim()}"${add_attribute(
    "aria-current",
    isActive("/graphic-projects", currentRoute) ? "page" : void 0,
    0
  )}>Graphic Projects</a></li> <li${add_classes((isActive("/about", currentRoute) ? "active-item" : "").trim())}><a href="/about" class="${["nav-links", isActive("/about", currentRoute) ? "active" : ""].join(" ").trim()}"${add_attribute("aria-current", isActive("/about", currentRoute) ? "page" : void 0, 0)}>About</a></li> <li${add_classes((isActive("/resume", currentRoute) ? "active-item" : "").trim())}><a href="/resume" class="${[
    "resume-link button-pulse-black",
    isActive("/resume", currentRoute) ? "active" : ""
  ].join(" ").trim()}"${add_attribute("aria-current", isActive("/resume", currentRoute) ? "page" : void 0, 0)}>Resume</a></li> <li class="mobile-last" data-svelte-h="svelte-ia34c6">.</li></ul></div></div> <div id="top"></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  $$unsubscribe_page();
  return `<div class="site-wrapper">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <div class="${"app " + escape("", true) + " " + escape("", true)}"><div class="route-stage">${slots.default ? slots.default({}) : ``}</div></div> <footer class="site-footer"><div class="site-footer__inner"> <div class="site-footer__content"><p class="site-footer__eyebrow" data-svelte-h="svelte-dc284l">Megan Palmquist</p> <p class="site-footer__title" data-svelte-h="svelte-z9ad7m">Design <span>x</span> Development</p> <p class="site-footer__copy">${escape(currentYear)} · Front-end development and visual design.</p></div>  <div class="site-footer__links" data-svelte-h="svelte-1egfc3s"><p class="site-footer__links-label">Explore</p> <div class="site-footer__links-row"><a href="/about">About</a> <a href="/web-projects">Web Projects</a> <a href="/graphic-projects">Graphic Projects</a> <a href="/resume">Résumé</a></div>  <div class="site-footer__socials" aria-label="Social media links"><a href="https://www.linkedin.com/in/megan-palmquist/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a> <a href="https://github.com/megpalmq" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fa-brands fa-github"></i></a> <a href="https://www.instagram.com/mspstudios_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a></div></div>  <a href="mailto:mspstudios7@gmail.com" class="site-footer__email-btn" data-svelte-h="svelte-ts348p">Let&#39;s Talk</a></div>  <div class="site-footer__bottom"><p>© ${escape(currentYear)} Megan Palmquist</p> <a href="#top" class="site-footer__back-top" data-svelte-h="svelte-1bm79ts">Back to top</a></div></footer></div>`;
});
export {
  Layout as default
};
