<script>
  import port from "$lib/images/portfolio.png";
  import Osaka from "$lib/images/Osaka.jpg";
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
  <title>Megan Palmquist</title>
  <meta name="description" content="Megan Palmquistvpersonal portfolio" />
  <meta property="og:image" content={port} />
  <meta property="og:description" content="Megan Palmquist Portfolio" />
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
          <div class="megpal fancy-text"></div>
          <h2>
            I bring creativity to life through design, detail, and purpose.
          </h2>
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
              href="https://www.instagram.com/megannstone_/"
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
        src={Osaka}
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
