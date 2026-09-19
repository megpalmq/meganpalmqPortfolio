<script>
  import port from "$lib/images/portfolio.png";
  import Kouki from "$lib/images/kouki.png";
  import DT from "$lib/images/DT.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Megan Palmquist | Web & Graphic Design Portfolio</title>

  <meta
    name="description"
    content="Megan Palmquist is a multidisciplinary designer and front-end developer specializing in custom websites, branding, graphic design, and digital experiences."
  />

  <meta
    property="og:title"
    content="Megan Palmquist | Web & Graphic Design Portfolio"
  />

  <meta
    property="og:description"
    content="Web design, branding, graphic design, and digital experiences by Megan Palmquist."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="frosted-glass">
  <video
    autoplay
    muted
    loop
    playsinline
    preload="auto"
    src="/Background.mp4"
    type="video/mp4"
  ></video>
  <div class="home-wrapper" id="home">
    <div class="home-desc-wrapper">
      <div class="background"></div>
      <div class="home-desc">
        <div class="home-con hiddenbottom2">
          <p class="intro">Hi, my name is</p>

          <h1 class="studio-heading">
            <span class="sr-only">Megan Palmquist</span>
            <span class="megpal fancy-text" aria-hidden="true"></span>
          </h1>

          <h2 class="h2">I design thoughtful digital experiences.</h2>

          <p class="hero-description">
            I'm a designer and front-end developer working across websites,
            visual identities, and digital experiences. Explore a selection of
            my work.
          </p>
        </div>

        <div class="socials hiddenbottom3">
          <div class="social-box">
            <a
              href="https://www.linkedin.com/in/megan-palmquist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/megpalmq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/mspstudios_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<section class="project-hub hiddenbottom" id="projects">
  <h2 class="reveal-title" data-mask-reveal>Explore My Work</h2>
  <div class="hub-grid">
    <a href="/web-projects" class="hub-card hidden">
      <img
        src={DT}
        alt="Preview of web projects"
        loading="lazy"
        decoding="async"
      />
      <div class="hub-copy">
        <h3>Web Projects</h3>
        <p>Interactive builds, UI/UX thinking, and front-end development.</p>
        <span>View Web Portfolio <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </a>

    <a href="/graphic-projects" class="hub-card hidden">
      <img
        src={Kouki}
        alt="Preview of graphic design projects"
        loading="lazy"
        decoding="async"
      />
      <div class="hub-copy">
        <h3>Graphic Design Projects</h3>
        <p>Brand identity, typography systems, and visual storytelling.</p>
        <span
          >View Design Portfolio <i class="fa-solid fa-arrow-right"></i></span
        >
      </div>
    </a>
  </div>
</section>

<div class="aboutme">
  <a href="/about" class="aboutme-link"
    >About Me <i class="fa-solid fa-arrow-right"></i></a
  >
</div>
