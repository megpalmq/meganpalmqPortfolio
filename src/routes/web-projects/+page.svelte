<script>
  import port from "$lib/images/portfolio.png";
  import keurig from "$lib/images/keurig.png";
  import DFD from "$lib/images/DFD.png";
  import BL from "$lib/images/bloodletting.png";
  import PTR from "$lib/images/pb.png";
  import DT from "$lib/images/DT.png";
  import thomasF from "$lib/images/thomasfielding.png";
  import windcombe from "$lib/images/windcombe.png";
  import ap from "$lib/images/ap.png";
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
  <meta
    name="description"
    content="Web development projects by Megan Palmquist"
  />
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
    <p class="web-title-sub">
      Crafted interfaces, branded systems, and polished interactions.
    </p>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a href="https://n423-6048d.web.app/" target="_blank">
        <img
          src={DT}
          alt="Dream Team website"
          loading="lazy"
          decoding="async"
        /></a
      >

      <div class="project-desc">
        <a
          href="https://github.com/n423DreamTeam/dreamTeamPRT2Laptop"
          class="github"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://n423-6048d.web.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>

        <a
          href="https://n423-6048d.web.app/"
          class="project-title"
          target="_blank"
        >
          <h3>Dream Team</h3>
        </a>
        <p class="date">Fall 2025</p>
        <p class="desc">
          Dream Team is an interactive Pacers fan web app I designed and
          developed to give users a fun, engaging way to build their ideal
          starting lineup. The app allows fans to create their own all-time
          Pacers "dream team," explore a full roster pulled dynamically from an
          API, and participate in a daily Stat Match puzzle where they can
          select any Pacers player in franchise history to complete the
          challenge. Dream Team also includes a chat feature, a rewards tab, an
          account system, and all custom graphics created by me. This project
          showcases my skills in front-end development, UI/UX design, API
          integration, and creating cohesive branding for a digital product.
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
      <a href="https://www.patriotismreimagined.com/" target="_blank">
        <img
          src={ap}
          alt="Patriotism Reimagined website"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc">
        <a
          href="https://github.com/megpalmq/PatriotismReimagined"
          class="github"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.patriotismreimagined.com/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.patriotismreimagined.com/"
          class="project-title"
          target="_blank"
        >
          <h3>Patriotism Reimagined</h3>
        </a>
        <p class="date">Spring 2026</p>
        <p class="desc">
          Patriotism Reimagined is an interactive, visually driven website that
          explores modern interpretations of patriotism through storytelling,
          design, and digital experiences. The site redefines traditional ideas
          of patriotism by focusing on inclusivity, community, culture, and
          contemporary American identity. Through engaging visuals, typography,
          and immersive layouts, the project encourages users to think
          critically about what patriotism means in today's society. The concept
          aligns with broader discussions around reimagining patriotism in
          modern America.
          <br />
          <br />
          For this project, I designed and developed the website using React.js and
          modern frontend development practices. I worked on implementing custom
          layouts, animations, responsive design, and visually engaging user interactions
          to create an immersive browsing experience. I utilized technologies such
          as HTML, CSS/SCSS, JavaScript, and modern web development practices to
          ensure the site was both functional and visually compelling across devices.
          I also collaborated on translating creative concepts into a polished digital
          experience that supports the project's message and storytelling goals.
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
      <a href="https://design-for-dignity.vercel.app/" target="_blank">
        <img
          src={DFD}
          alt="Design for Dignity website"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc">
        <a
          href="https://github.com/megpalmq/DesignForDignity"
          class="github"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://design-for-dignity.vercel.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://design-for-dignity.vercel.app/"
          class="project-title"
          target="_blank"
        >
          <h3>Design For Dignity</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          The Design for Dignity website is a collaborative project dedicated to
          showcasing design solutions that promote dignity and accessibility. It
          features a seamless backend for optimal functionality and a
          thoughtfully crafted frontend design. The site highlights the
          initiative's mission, projects, and impact, serving as a platform for
          meaningful design work aimed at improving lives.
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
        <img
          src={thomasF}
          alt="Thomas Fielding site"
          loading="lazy"
          decoding="async"
        /></a
      >

      <div class="project-desc">
        <a
          href="https://www.thomasfielding.com/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.thomasfielding.com/"
          class="project-title"
          target="_blank"
        >
          <h3>Portfolio & E-Commerce Site</h3>
        </a>
        <p class="date">Summer 2025</p>
        <p class="desc">
          I redesigned Thomas Fielding's WordPress portfolio website to create a
          cleaner, more professional platform for showcasing his work. Alongside
          the design refresh, I also integrated an e-commerce solution for
          selling his sheet music. To protect his digital products, I
          implemented a dynamic watermark system that applies a unique watermark
          to each purchased sheet, ensuring security while maintaining a
          seamless customer experience.
        </p>
        <div class="project-skills">
          <span>Wordpress</span>
          <span>E-Commerce Integration (WooCommerce)</span>
          <span>Client Engagement</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://windcombe.com/" target="_blank">
        <img
          src={windcombe}
          alt="Windcombe website"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/248254721/Windcombe"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://windcombe.com/" class="project-title" target="_blank">
          <h3>Windcombe</h3>
        </a>
        <p class="date">Fall 2025</p>
        <p class="desc">
          Redesigned and developed a WordPress website for the <strong>
            Windcombe Neighborhood Association</strong
          >, transforming it into an interactive community hub. The site
          features user account logins, a resident community board, and a
          neighborhood map, along with organized pages for announcements,
          events, and resources to improve accessibility and engagement.
        </p>
        <div class="project-skills">
          <span>WordPress</span>
          <span>Client Engagement</span>
          <span>Branding</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://bloodletting.vercel.app/" target="_blank">
        <img
          src={BL}
          alt="Bloodletting website"
          loading="lazy"
          decoding="async"
        /></a
      >

      <div class="project-desc">
        <a
          href="https://github.com/megpalmq/bloodletting"
          class="github"
          target="_blank"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="https://bloodletting.vercel.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://bloodletting.vercel.app/"
          class="project-title"
          target="_blank"
        >
          <h3>Bloodletting</h3>
        </a>
        <p class="date">Summer 2025</p>
        <p class="desc">
          I collaborated with Witless Crusade Games to design and develop the
          official website for their asymmetric board game, Bloodletting. The
          site introduces the game's dark, apocalyptic world through immersive
          visuals, smooth scroll animations, and responsive layouts. It
          highlights each of the four factions - War, Death, Famine, and
          Pestilence - with distinctive imagery and motion to reflect their
          unique identities, creating an atmospheric and engaging online
          showcase for the game.
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
