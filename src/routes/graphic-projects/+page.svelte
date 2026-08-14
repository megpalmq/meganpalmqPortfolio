<script>
  import port from "$lib/images/portfolio.png";
  import yonsei from "$lib/images/yonsei.png";
  import happy from "$lib/images/happy.png";
  import sunny from "$lib/images/sunny.png";
  import Osaka from "$lib/images/Osaka.jpg";
  import FD from "$lib/images/FreezeDry.png";
  import atrium from "$lib/images/AH.png";
  import kozen from "$lib/images/kouki.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let currentUrl;
  let expandedDescriptions = {
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
  };

  $: currentUrl = $page.url.pathname;

  function toggleDescription(index, event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    expandedDescriptions[index] = !expandedDescriptions[index];
    expandedDescriptions = { ...expandedDescriptions };
  }

  onMount(() => {
    if (currentUrl == "/graphic-projects") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Graphic Design Projects | Megan Palmquist</title>
  <meta
    name="description"
    content="Graphic design projects by Megan Palmquist"
  />
  <meta property="og:image" content={port} />
  <meta
    property="og:description"
    content="Megan Palmquist Graphic Design Projects"
  />
</svelte:head>

<div class="projects-wrapper projects-page graphic-grid" id="projects2">
  <div
    style="margin-top: 50px;"
    class="projects-header"
    stydata-parallax="0.08"
  >
    <p class="web-title-kicker">Featured Work</p>
    <h1 class="reveal-title web-title" data-mask-reveal>
      <span>Graphic</span>
      <span class="title-accent">Projects</span>
    </h1>
    <p class="web-title-sub">
      Brand systems, editorial layouts, and visual storytelling.
    </p>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box">
      <a href="/graphic-projects/osaka-2036-olympics">
        <img
          src={Osaka}
          alt="Osaka 2036 Olympics design project"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[0]}>
        <a href="/graphic-projects/osaka-2036-olympics" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/osaka-2036-olympics" class="project-title">
          <h3>Osaka 2036 Olympics</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          I developed a complete brand identity for the Osaka Olympics,
          including a logo, print materials, merchandise, and website mockup,
          inspired by the city's culture, traditional art, and modern innovation
          to create a visually compelling and authentic Olympic brand.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Indesign</span>
          <span>Figma</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box">
      <a href="/graphic-projects/atrium-house">
        <img
          src={atrium}
          alt="Atrium House branding project"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[1]}>
        <a href="/graphic-projects/atrium-house" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/atrium-house" class="project-title">
          <h3>Atrium House</h3>
        </a>
        <p class="date">Spring 2026</p>
        <p class="desc">
          Atrium House is a luxury hospitality brand inspired by the elegance of
          boutique hotels and the cultural atmosphere of contemporary art
          museums, featuring refined typography, rich plum and olive tones, and
          immersive branding across signage, packaging, and guest experience
          materials.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Product Design</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box">
      <a href="/graphic-projects/kozen-skincare">
        <img
          src={kozen}
          alt="Kozen branding"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[2]}>
        <a href="/graphic-projects/kozen-skincare" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/kozen-skincare" class="project-title">
          <h3>Kozen Skincare</h3>
        </a>
        <p class="date">Spring 2026</p>
        <p class="desc">
          A skincare brand identity that pairs clean typography, soft color, and
          minimal packaging for a calm, premium feel.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Packaging</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box">
      <a href="/graphic-projects/freeze-dried">
        <img
          src={FD}
          alt="Freeze Dried branding project"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[3]}>
        <a href="/graphic-projects/freeze-dried" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/freeze-dried" class="project-title">
          <h3>Freeze Dried</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          For this branding and packaging project, I created a playful and
          vibrant identity for a freeze-dried candy brand using icy colors,
          dynamic typography, and bold packaging design to capture the product's
          fun, airy texture and appeal to a youthful audience.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Product Design</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box">
      <a href="/graphic-projects/sun-drift">
        <img
          src={sunny}
          alt="Sun Drift music festival brand identity and schedule design"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[4]}>
        <a href="/graphic-projects/sun-drift" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/sun-drift" class="project-title">
          <h3>Sun Drift</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          Sun Drift is a conceptual music festival set in Joshua Tree,
          California. I developed a complete visual identity that combines
          expressive typography, psychedelic patterns, and a bold color palette
          to capture the energy of an outdoor music festival. The identity was
          designed as a flexible system that could stay recognizable across
          promotional, informational, environmental, and wearable applications.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box">
      <a href="/graphic-projects/yonsei-x-herron">
        <img
          src={yonsei}
          alt="Yonsei x Herron infographic"
          loading="lazy"
          decoding="async"
        /></a
      >
      <div class="project-desc" class:expanded={expandedDescriptions[5]}>
        <a href="/graphic-projects/yonsei-x-herron" class="arrow-link">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="/graphic-projects/yonsei-x-herron" class="project-title">
          <h3>Yonsei x Herron</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          A typography-driven design project that explores the collaboration
          between Yonsei University and Herron School of Art and Design. The
          project is 2 infographic poster that talk about food insecurity in
          Seoul South Korea and Indianapolis Indiana.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="aboutme">
  <a href="/web-projects" class="aboutme-link"
    >See Web Work <i class="fa-solid fa-arrow-right"></i></a
  >
</div>
