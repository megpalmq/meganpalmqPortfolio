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
  import { goto } from "$app/navigation";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl === "/graphic-projects") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });

  const graphicProjects = [
    {
      title: "Osaka 2036 Olympics",
      slug: "osaka-2036-olympics",
      image: Osaka,
      alt: "Osaka 2036 Olympics design project",
      date: "Spring 2025",
      description:
        "I developed a complete brand identity for the Osaka Olympics, including a logo, print materials, merchandise, and website mockup, inspired by the city's culture, traditional art, and modern innovation to create a visually compelling and authentic Olympic brand.",
      skills: ["Branding", "Indesign", "Figma", "Illustrator", "Typography"],
    },

    {
      title: "Atrium House",
      slug: "atrium-house",
      image: atrium,
      alt: "Atrium House branding project",
      date: "Spring 2026",
      description:
        "Atrium House is a luxury hospitality brand inspired by the elegance of boutique hotels and the cultural atmosphere of contemporary art museums, featuring refined typography, rich plum and olive tones, and immersive branding across signage, packaging, and guest experience materials.",
      skills: ["Branding", "Product Design", "Illustrator", "Typography"],
    },

    {
      title: "Kozen Skincare",
      slug: "kozen-skincare",
      image: kozen,
      alt: "Kozen skincare branding project",
      date: "Spring 2026",
      description:
        "A skincare brand identity that pairs clean typography, soft color, and minimal packaging for a calm, premium feel.",
      skills: ["Branding", "Packaging", "Illustrator", "Typography"],
    },

    {
      title: "Freeze Dried",
      slug: "freeze-dried",
      image: FD,
      alt: "Freeze Dried branding project",
      date: "Spring 2025",
      description:
        "For this branding and packaging project, I created a playful and vibrant identity for a freeze-dried candy brand using icy colors, dynamic typography, and bold packaging design to capture the product's fun, airy texture and appeal to a youthful audience.",
      skills: ["Branding", "Product Design", "Illustrator", "Typography"],
    },

    {
      title: "Sun Drift",
      slug: "sun-drift",
      image: sunny,
      alt: "Sun Drift music festival brand identity and schedule design",
      date: "Fall 2024",
      description:
        "Sun Drift is a conceptual music festival set in Joshua Tree, California. I developed a complete visual identity that combines expressive typography, psychedelic patterns, and a bold color palette to capture the energy of an outdoor music festival. The identity was designed as a flexible system that could stay recognizable across promotional, informational, environmental, and wearable applications.",
      skills: ["Indesign", "Illustrator", "Typography"],
    },

    {
      title: "Yonsei x Herron",
      slug: "yonsei-x-herron",
      image: yonsei,
      alt: "Yonsei x Herron infographic",
      date: "Fall 2023",
      description:
        "A typography-driven design project that explores the collaboration between Yonsei University and Herron School of Art and Design. The project is 2 infographic posters that talk about food insecurity in Seoul, South Korea and Indianapolis, Indiana.",
      skills: ["Indesign", "Illustrator", "Typography"],
    },
  ];
</script>

<svelte:head>
  <title>Graphic Design Projects | Megan Palmquist | MSP Studios</title>

  <meta
    name="description"
    content="Explore graphic design projects by Megan Palmquist of MSP Studios, featuring branding, typography, packaging, print design, and visual storytelling."
  />

  <!-- Open Graph / Social Sharing -->
  <meta
    property="og:title"
    content="Graphic Design Projects | Megan Palmquist | MSP Studios"
  />

  <meta
    property="og:description"
    content="Explore branding, typography, packaging, print, and visual design projects created by Megan Palmquist of MSP Studios."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="MSP Studios" />
</svelte:head>

<div class="projects-wrapper projects-page graphic-grid" id="projects">
  <!-- =========================================
       PROJECT HEADER
  ========================================== -->

  <div class="projects-header">
    <p class="web-title-kicker">Featured Work</p>

    <h1 class="web-title">
      <span> Graphic </span>

      <span class="title-accent"> Projects </span>
    </h1>

    <p class="web-title-sub">
      Brand systems, editorial layouts, and visual storytelling.
    </p>

    <p class="header-detail">Built with intention</p>
  </div>

  <div class="projects-header-under"></div>

  <!-- =========================================
       PROJECT CARDS
  ========================================== -->

  <div class="project-boxes">
    {#each graphicProjects as project, index}
      <div
        class="project-box"
        role="link"
        tabindex="0"
        on:click={() => goto(`/graphic-projects/${project.slug}`)}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            goto(`/graphic-projects/${project.slug}`);
          }
        }}
      >
        <!-- PROJECT IMAGE -->

        <div class="project-media">
          <a
            href={`/graphic-projects/${project.slug}`}
            on:click|stopPropagation
            aria-label={`View ${project.title} project`}
          >
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <!-- PROJECT INFORMATION -->

        <div class="project-desc">
          <!-- PROJECT NUMBER -->

          <!-- TITLE + ACTION -->

          <div class="project-title-row">
            <div class="project-title">
              <h3>
                {project.title}
              </h3>
            </div>

            <div class="project-actions">
              <a
                href={`/graphic-projects/${project.slug}`}
                class="arrow-link"
                aria-label={`Open ${project.title}`}
                on:click|stopPropagation
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <!-- DATE -->

          <p class="date">
            {project.date}
          </p>

          <!-- DESCRIPTION -->

          <p class="desc">
            {project.description}
          </p>

          <!-- VIEW PROJECT -->

          <a
            class="learn-more"
            href={`/graphic-projects/${project.slug}`}
            on:click|stopPropagation
          >
            View project

            <i class="fa-solid fa-arrow-right"></i>
          </a>

          <!-- SKILLS -->

          <div class="project-skills">
            {#each project.skills as skill}
              <span>
                {skill}
              </span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<!-- =========================================
     NEXT PORTFOLIO SECTION
========================================== -->

<div class="aboutme">
  <a href="/web-projects" class="aboutme-link">
    See Web Work

    <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
