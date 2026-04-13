<script>
  import port from "$lib/images/portfolio.png";
  import yonsei from "$lib/images/yonsei.png";
  import happy from "$lib/images/happy.png";
  import FOV from "$lib/images/FOV.png";
  import Osaka from "$lib/images/Osaka.jpg";
  import FD from "$lib/images/FreezeDry.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/graphic-projects") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Graphic Design Projects | Megan Palmquist</title>
  <meta name="description" content="Graphic design projects by Megan Palmquist" />
  <meta property="og:image" content={port} />
  <meta property="og:description" content="Megan Palmquist Graphic Design Projects" />
</svelte:head>

<div class="projects-wrapper projects-page graphic-grid" id="projects2">
  <div class="projects-header" data-parallax="0.08">
    <p class="web-title-kicker">Featured Work</p>
    <h1 class="reveal-title web-title" data-mask-reveal>
      <span>Graphic</span>
      <span class="title-accent">Projects</span>
    </h1>
    <p class="web-title-sub">Brand systems, editorial layouts, and visual storytelling.</p>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics" target="_blank">
        <img src={Osaka} alt="Osaka 2036 Olympics design project" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics" class="project-title" target="_blank">
          <h3>Osaka 2036 Olympics</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          For this project, I created a complete brand identity for the Olympics in Osaka, Japan. I began by studying Osaka's culture, history, and design influences. The project included designing a logo, brochure, poster, custom pattern, event tickets, lanyard, and website mockup. Drawing inspiration from Osaka's cityscape, traditional art, and modern innovation, the branding captures the city's essence and the spirit of the Olympic Games, resulting in a visually compelling and culturally authentic brand.
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

    <div class="project-box hidden">
      <a href="https://www.behance.net/gallery/223089271/Freeze-Dried?" target="_blank">
        <img src={FD} alt="Freeze Dried branding project" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a href="https://www.behance.net/gallery/223089271/Freeze-Dried?" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.behance.net/gallery/223089271/Freeze-Dried?" class="project-title" target="_blank">
          <h3>Freeze Dried</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          For this branding and packaging project, I designed a playful and vibrant identity for a freeze-dried candy brand. Inspired by the cool, frozen process of freeze-drying, I focused on using icy colors and dynamic typography to reflect the candy's light, airy texture. The packaging design features bold, modern elements that stand out on shelves, aiming to capture the fun and refreshing qualities of the product. This project showcases my ability to create engaging, eye-catching designs that connect with a youthful audience.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Product Design</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/218521699/Fragments-of-Vulnerability"
        target="_blank"
      >
        <img src={FOV} alt="Fragments of Vulnerability zine" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/218521699/Fragments-of-Vulnerability"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/218521699/Fragments-of-Vulnerability"
          class="project-title"
          target="_blank"
        >
          <h3>Fragments of Vulnerability</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          The Vulnerability Zine is a typography-focused project that tells the powerful, real-life story of an individual affected by human trafficking. Through expressive typography and design, the zine captures the emotional depth of the experience, using visual storytelling to raise awareness and foster empathy for those impacted by this issue.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron" target="_blank">
        <img src={yonsei} alt="Yonsei x Herron infographic" loading="lazy" decoding="async" /></a
      >
      <div class="project-desc">
        <a href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron" class="project-title" target="_blank">
          <h3>Yonsei x Herron</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          A typography-driven design project that explores the collaboration between Yonsei University and Herron School of Art and Design. The project is 2 infographic poster that talk about food insecurity in Seoul South Korea and Indianapolis Indiana.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>

    <div class="project-box hidden">
      <a href="https://www.behance.net/gallery/211130921/The-Happiness-Project" target="_blank">
        <img src={happy} alt="The Happiness Project booklet" loading="lazy" decoding="async" /></a
      >

      <div class="project-desc">
        <a href="https://www.behance.net/gallery/211130921/The-Happiness-Project" class="arrow-link" target="_blank">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a href="https://www.behance.net/gallery/211130921/The-Happiness-Project" class="project-title" target="_blank">
          <h3>The Happiness Project</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          A booklet-style project designed to educate and guide the audience through the experience of a panic attack, offering insights into its emotional and physical symptoms. The project also provides helpful strategies and techniques for managing and overcoming panic attacks, creating a compassionate and informative resource for those seeking support.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Typography</span>
          <span>Adobe Creative Suite</span>
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
