<script>
  import port from "$lib/images/portfolio.png";
  import keurig from "$lib/images/keurig.png";
  import DFD from "$lib/images/DFD.png";
  import BL from "$lib/images/bloodletting.png";
  import DT from "$lib/images/DT.png";
  import thomasF from "$lib/images/thomasfielding.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/web-projects") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Web Projects | Megan Palmquist</title>
  <meta name="description" content="Web development projects by Megan Palmquist" />
  <meta property="og:image" content={port} />
  <meta property="og:description" content="Megan Palmquist Web Projects" />
</svelte:head>

<div class="projects-wrapper projects-page web-grid" id="projects">
  <div class="projects-header" data-parallax="0.08">
    <p class="web-title-kicker">Featured Work</p>
    <h1 class="reveal-title web-title" data-mask-reveal>
      <span>Web</span>
      <span class="title-accent">Projects</span>
    </h1>
    <p class="web-title-sub">Crafted interfaces, branded systems, and polished interactions.</p>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a href="https://n423-6048d.web.app/" target="_blank">
        <img src={DT} alt="Dream Team website" loading="lazy" decoding="async" /></a
      >

      <div class="project-desc">
        <a
          href="https://github.com/n423DreamTeam/dreamTeamPRT2Laptop"
          class="github"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://n423-6048d.web.app/" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>

        <a href="https://n423-6048d.web.app/" class="project-title" target="_blank">
          <h3>Dream Team</h3>
        </a>
        <p class="date">Fall 2025</p>
        <p class="desc">
          Dream Team is an interactive Pacers fan web app I designed and developed to give users a fun, engaging way to build their ideal starting lineup. The app allows fans to create their own all-time Pacers "dream team," explore a full roster pulled dynamically from an API, and participate in a daily Stat Match puzzle where they can select any Pacers player in franchise history to complete the challenge. Dream Team also includes a chat feature, a rewards tab, an account system, and all custom graphics created by me. This project showcases my skills in front-end development, UI/UX design, API integration, and creating cohesive branding for a digital product.
        </p>
        <div class="project-skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>API</span>
          <span>UI</span>
          <span>Graphic Design</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://design-for-dignity.vercel.app/" target="_blank">
        <img src={DFD} alt="Design for Dignity website" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a href="https://github.com/megpalmq/DesignForDignity" class="github" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://design-for-dignity.vercel.app/" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://design-for-dignity.vercel.app/" class="project-title" target="_blank">
          <h3>Design For Dignity</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          The Design for Dignity website is a collaborative project dedicated to showcasing design solutions that promote dignity and accessibility. It features a seamless backend for optimal functionality and a thoughtfully crafted frontend design. The site highlights the initiative's mission, projects, and impact, serving as a platform for meaningful design work aimed at improving lives.
        </p>
        <div class="project-skills">
          <span>SCSS</span>
          <span>HTML</span>
          <span>JavaScript</span>
          <span>jQuery</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://www.thomasfielding.com/" target="_blank">
        <img src={thomasF} alt="Thomas Fielding site" loading="lazy" decoding="async" /></a
      >

      <div class="project-desc">
        <a href="https://www.thomasfielding.com/" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.thomasfielding.com/" class="project-title" target="_blank">
          <h3>Portfolio & E-Commerce Site</h3>
        </a>
        <p class="date">Summer 2025</p>
        <p class="desc">
          I redesigned Thomas Fielding's WordPress portfolio website to create a cleaner, more professional platform for showcasing his work. Alongside the design refresh, I also integrated an e-commerce solution for selling his sheet music. To protect his digital products, I implemented a dynamic watermark system that applies a unique watermark to each purchased sheet, ensuring security while maintaining a seamless customer experience.
        </p>
        <div class="project-skills">
          <span>Wordpress</span>
          <span>E-Commerce Integration (WooCommerce)</span>
          <span>Client Engagement</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://keurigcopycat.vercel.app/" target="_blank">
        <img src={keurig} alt="Keurig copycat website" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a href="https://github.com/megpalmq/315Final" class="github" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://keurigcopycat.vercel.app/" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://keurigcopycat.vercel.app/" class="project-title" target="_blank">
          <h3>Keurig CopyCat</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          An exact replica of the Keurig website, including a fully functional login/sign-up page and cart system, showcasing attention to detail and interactive features.<br /><br />Site I was meant to replicate:
          <a
            href="https://www.keurig.com/c/coffeemakers101?cm_sp=bo+cybermonday21-_-promo+hero+banner-_-shop+coffee+makers"
            target="_blank"
            class="here">Here</a
          >
        </p>
        <div class="project-skills">
          <span>MVC Model</span>
          <span>SCSS</span>
          <span>HTML</span>
          <span>JavaScript</span>
          <span>jQuery</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://bloodletting.vercel.app/" target="_blank">
        <img src={BL} alt="Bloodletting website" loading="lazy" decoding="async" /></a
      >

      <div class="project-desc">
        <a href="https://github.com/megpalmq/bloodletting" class="github" target="_blank">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://bloodletting.vercel.app/" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://bloodletting.vercel.app/" class="project-title" target="_blank">
          <h3>Bloodletting</h3>
        </a>
        <p class="date">Summer 2025</p>
        <p class="desc">
          I collaborated with Witless Crusade Games to design and develop the official website for their asymmetric board game, Bloodletting. The site introduces the game's dark, apocalyptic world through immersive visuals, smooth scroll animations, and responsive layouts. It highlights each of the four factions - War, Death, Famine, and Pestilence - with distinctive imagery and motion to reflect their unique identities, creating an atmospheric and engaging online showcase for the game.
        </p>
        <div class="project-skills">
          <span>HTML5</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Responsive Design</span>
          <span>UI Animation</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="aboutme">
  <a href="/graphic-projects" class="aboutme-link"
    >See Graphic Work <i class="fa-solid fa-arrow-right"></i></a
  >
</div>
