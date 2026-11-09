import { c as create_ssr_component, b as subscribe, d as add_attribute, g as each, f as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { y as yonseiLarge } from "../../../chunks/yonseiL.js";
import { p as port } from "../../../chunks/portfolio.js";
const ENJ = "/_app/immutable/assets/ENJLOGO-WhiteText.m-inBJfw.png";
const KFT = "/_app/immutable/assets/KFT.dCpcEv4H.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const developmentSkills = [
    "HTML",
    "CSS / SCSS",
    "JavaScript",
    "TypeScript",
    "Svelte",
    "Next.js",
    "WordPress",
    "PHP",
    "SQL",
    "jQuery",
    "Git",
    "Responsive Design",
    "Shopify"
  ];
  const designSkills = [
    "Figma",
    "Adobe Creative Suite",
    "UX / UI Design",
    "Branding",
    "Wireframing",
    "Prototyping",
    "Typography",
    "Design Systems",
    "Illustration"
  ];
  $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-178xpcj_START -->${$$result.title = `<title>About Megan Palmquist | Portfolio</title>`, ""}<meta name="description" content="Learn more about Megan Palmquist, a multidisciplinary designer specializing in web design, front-end development, branding, and graphic design."><meta property="og:title" content="About Megan Palmquist | Portfolio"><meta property="og:description" content="Meet Megan Palmquist, a multidisciplinary designer specializing in web design, development, branding, and graphic design."><meta property="og:image"${add_attribute("content", port, 0)}><meta property="og:type" content="website"><meta property="og:site_name" content="Megan Palmquist Portfolio"><!-- HEAD_svelte-178xpcj_END -->`, ""} <div class="about-page"> <section class="about-hero" data-svelte-h="svelte-75nune"><div class="about-hero-content"><div class="about-hero-copy"><div class="section-label"><span>About</span> <i>/</i></div> <span class="hero-number">01</span> <h1>Nice to meet you.

          <strong style="color: #8451A6">I&#39;m Megan.</strong></h1> <div class="hero-line"></div> <p class="hero-intro">I&#39;m Megan Palmquist, a front-end developer and multidisciplinary
          designer who loves creating thoughtful digital experiences that are
          both beautiful and functional. I&#39;m also the founder and owner of MSP
          Studios, my independent design studio.</p> <a href="/web-projects" class="hero-link">See my web work
          <i class="fa-solid fa-arrow-right"></i></a> <a href="https://www.mspstudios.co" class="hero-link" target="_blank" rel="noopener noreferrer">Visit MSP Studios
          <i class="fa-solid fa-arrow-up-right-from-square"></i></a></div> <div class="about-hero-image"><div class="portrait-wrap"><div class="portrait-glow"></div> <div class="portrait"></div></div> <div class="portrait-note">designer
          <br>
          at heart ♡</div> <div class="orbit-line orbit-one"></div> <div class="orbit-line orbit-two"></div> <span class="orbit-dot"></span> <span class="orbit-star">✦</span></div></div></section>  <section class="about-split-section"><article class="about-panel what-i-do" data-svelte-h="svelte-1bjo1l7"><div class="panel-heading"><span class="panel-icon"><i class="fa-solid fa-code"></i></span> <div><p>What I Do</p> <span></span></div></div> <div class="what-layout"><h2>I work where
          <em>design</em>
          meets
          <em>development.</em></h2> <div class="discipline-list"><div class="discipline-item"><span class="discipline-icon"><i class="fa-solid fa-code"></i></span> <p>Front-end
              <br>
              Development</p></div> <div class="discipline-item"><span class="discipline-icon"><i class="fa-solid fa-arrow-pointer"></i></span> <p>UX / UI
              <br>
              Design</p></div> <div class="discipline-item"><span class="discipline-icon"><i class="fa-solid fa-pen-nib"></i></span> <p>Brand
              <br>
              Design</p></div></div></div></article>  <article class="about-panel approach" data-svelte-h="svelte-19vh3dq"><div class="panel-heading"><span class="panel-icon"><i class="fa-regular fa-heart"></i></span> <div><p>My Approach</p> <span></span></div></div> <div class="approach-content"><div class="quote-mark">“</div> <blockquote>Clear,
          <em>expressive,</em>
          and enjoyable to use.</blockquote> <p>I care about the details: pacing, motion, typography, and color
          systems — the things that turn good design into great experiences.</p> <p class="font-note">And yes, I&#39;m almost always thinking about fonts.</p></div></article></section>  <section class="skills-section about-panel"><span class="ghost-section-number" data-svelte-h="svelte-1kvrqno">02</span> <div class="panel-heading" data-svelte-h="svelte-1vu5hna"><span class="panel-icon"><i class="fa-solid fa-wrench"></i></span> <div><p>Tools &amp; Capabilities</p> <span></span></div></div> <div class="skills-columns"> <div class="skills-column"><p class="skills-label" data-svelte-h="svelte-1b4nd07">01 / Development</p> <div class="skill-list">${each(developmentSkills, (skill) => {
    return `<span>${escape(skill)} </span>`;
  })}</div></div>  <div class="skills-column"><p class="skills-label" data-svelte-h="svelte-1bse17t">02 / Design</p> <div class="skill-list">${each(designSkills, (skill) => {
    return `<span>${escape(skill)} </span>`;
  })}</div></div></div></section>  <section class="type-feature" data-svelte-h="svelte-15zg9d"><div class="type-copy"><p class="section-label">And yes,</p> <h2>I&#39;m almost always
        <br>
        thinking about
        <em>fonts.</em></h2></div> <div class="type-divider"></div> <p class="type-description">Typography tells a story before a single word is even read.</p> <div class="type-display">Aa</div> <span class="type-spark">✦</span></section>  <section class="experience-section about-panel" data-svelte-h="svelte-2ppj98"><span class="ghost-section-number">03</span> <div class="panel-heading"><span class="panel-icon"><i class="fa-solid fa-briefcase"></i></span> <div><p>Selected Experience</p> <span></span></div></div> <div class="experience-line"></div> <div class="experience-grid"> <article class="experience-card"><span class="experience-year">01</span> <div class="experience-logo experience-logo-kft"><a href="https://www.kungfutea.com/" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", KFT, 0)} alt="Kung Fu Tea" loading="lazy" decoding="async"></a></div> <p class="experience-type">Organization</p></article>  <article class="experience-card"><span class="experience-year">02</span> <div class="experience-logo"><img${add_attribute("src", ENJ, 0)} alt="Every New Joy" loading="lazy" decoding="async"></div> <p class="experience-type">Brand + Web Design</p></article>  <article class="experience-card"><span class="experience-year">03</span> <div class="experience-logo"><a href="https://www.yonsei.ac.kr/en_sc/index.do" target="_blank" rel="noopener noreferrer"><img${add_attribute("src", yonseiLarge, 0)} alt="Yonsei University" loading="lazy" decoding="async"></a></div> <p class="experience-type">Design Collaboration</p></article></div></section>  <section class="about-cta" data-svelte-h="svelte-16bn686"><div class="cta-stars">✦</div> <div class="cta-question">Let&#39;s Create Something
      <br>
      Great</div> <div class="cta-divider"></div> <div class="cta-action"><p>I&#39;m currently open to full-time opportunities in web development and
        graphic design. If you think I&#39;d be a good fit for your team, I&#39;d love
        to connect.</p> <a href="mailto:meganpalmquist@outlook.com" class="cta-button">Let&#39;s Connect
        <i class="fa-regular fa-paper-plane"></i></a> <a href="/resume" class="cta-button">View Résumé
        <i class="fa-regular fa-file"></i></a></div> <div class="cta-globe">◎</div></section></div>`;
});
export {
  Page as default
};
