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
  <title>MSP Studios | Web & Graphic Design by Megan Palmquist</title>

  <meta
    name="description"
    content="MSP Studios is a web and graphic design studio founded by Megan Palmquist, specializing in custom websites, branding, graphic design, and digital experiences."
  />

  <meta property="og:title" content="Megan Palmquist | MSP Studios" />

  <meta
    property="og:description"
    content="Web design, branding, graphic design, and digital experiences by Megan Palmquist and MSP Studios."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MSP Studios" />
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
          <p class="intro">Hello, welcome to</p>

          <h1 class="studio-heading">
            <span class="sr-only">MSP Studios</span>
            <span class="megpal fancy-text" aria-hidden="true"></span>
          </h1>

          <h2 class="h2">
            Web Design, Graphic Design &amp; Digital Experiences
          </h2>

          <p class="hero-description">
            MSP Studios is a creative studio founded by Megan Palmquist,
            specializing in web design, branding, graphic design, and
            interactive digital experiences.
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
