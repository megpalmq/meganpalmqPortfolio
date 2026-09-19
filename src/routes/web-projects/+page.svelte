<script>
  import port from "$lib/images/portfolio.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { webProjects } from "$lib/data/webProjects";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl === "/web-projects") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Web Design Projects | Megan Palmquist</title>

  <meta
    name="description"
    content="Explore web design and development projects by Megan Palmquist, featuring responsive websites, UI/UX design, front-end development, and interactive digital experiences."
  />

  <!-- Open Graph / Social Sharing -->
  <meta property="og:title" content="Web Design Projects | Megan Palmquist" />

  <meta
    property="og:description"
    content="Explore web design, UI/UX, front-end development, and interactive digital projects created by Megan Palmquist."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="projects-wrapper projects-page web-grid" id="projects">
  <!-- =========================================
       PROJECT HEADER
  ========================================== -->

  <div class="projects-header" data-parallax="0.08">
    <p class="web-title-kicker">Featured Work</p>

    <h1 class="reveal-title web-title" data-mask-reveal>
      <span> Web </span>

      <span class="title-accent"> Projects </span>
    </h1>

    <p class="web-title-sub">
      Crafted interfaces, branded systems, and polished interactions.
    </p>
  </div>

  <div class="projects-header-under"></div>

  <!-- =========================================
       PROJECT CARDS
  ========================================== -->

  <div class="project-boxes">
    {#each webProjects as project, index}
      <div
        class="project-box"
        role="link"
        tabindex="0"
        on:click={() => goto(`/web-projects/${project.slug}`)}
        on:keydown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();

            goto(`/web-projects/${project.slug}`);
          }
        }}
      >
        <!-- PROJECT IMAGE -->

        <div class="project-media">
          <a
            href={`/web-projects/${project.slug}`}
            on:click|stopPropagation
            aria-label={`View ${project.title} project`}
          >
            <img
              src={project.heroImage}
              alt={project.heroAlt}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <!-- PROJECT INFORMATION -->

        <div class="project-desc">
          <!-- PROJECT NUMBER -->

          <!-- TITLE + ACTION BUTTONS -->

          <div class="project-title-row">
            <div class="project-title">
              <h3>
                {project.title}
              </h3>
            </div>

            <div class="project-actions">
              {#if project.githubUrl}
                <a
                  href={project.githubUrl}
                  class="github"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  on:click|stopPropagation
                >
                  <i class="fa-brands fa-github"></i>
                </a>
              {/if}

              {#if project.caseStudyUrl ?? project.liveUrl}
                <a
                  href={project.caseStudyUrl ?? project.liveUrl}
                  class="arrow-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.title}`}
                  on:click|stopPropagation
                >
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              {/if}
            </div>
          </div>

          <!-- DATE -->

          <p class="date">
            {project.date}
          </p>

          <!-- DESCRIPTION -->

          <p class="desc">
            {project.summary}
          </p>

          <!-- VIEW PROJECT -->

          <a
            class="learn-more"
            href={`/web-projects/${project.slug}`}
            on:click|stopPropagation
          >
            View project

            <i class="fa-solid fa-arrow-right"></i>
          </a>

          <!-- SKILLS -->

          <div class="project-skills">
            {#each project.highlights as skill}
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
  <a href="/graphic-projects" class="aboutme-link">
    See Graphic Work

    <i class="fa-solid fa-arrow-right"></i>
  </a>
</div>
