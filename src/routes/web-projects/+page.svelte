<script>
  import port from "$lib/images/portfolio.png";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import { webProjects } from "$lib/data/webProjects";

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
    {#each webProjects as project}
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
        <div class="project-media">
          <a href={`/web-projects/${project.slug}`}>
            <img
              src={project.heroImage}
              alt={project.heroAlt}
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <div class="project-desc">
          {#if project.githubUrl}
            <a
              href={project.githubUrl}
              class="github"
              target="_blank"
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
              on:click|stopPropagation
            >
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          {/if}

          <div class="project-title">
            <h3>{project.title}</h3>
          </div>
          <p class="date">{project.date}</p>
          <p class="desc">{project.summary}</p>
          <a
            class="learn-more"
            href={`/web-projects/${project.slug}`}
            on:click|stopPropagation>Learn more</a
          >
          <div class="project-skills">
            {#each project.highlights as skill}
              <span>{skill}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="aboutme">
  <a href="/graphic-projects" class="aboutme-link"
    >See Graphic Work <i class="fa-solid fa-arrow-right"></i></a
  >
</div>
