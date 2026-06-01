<script>
  import { onMount } from "svelte";

  export let data;

  let lightboxOpen = false;
  let lightboxSrc = "";

  function openLightbox(src) {
    lightboxSrc = src;
    lightboxOpen = true;
  }

  function closeLightbox() {
    lightboxOpen = false;
    lightboxSrc = "";
  }

  onMount(() => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;

    const escHandler = (e) => {
      if (e.key === "Escape" && lightboxOpen) closeLightbox();
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  });

  $: project = data.project;
  $: navigation = data.navigation;
  $: secondaryPdfSrc = project.secondaryPdf
    ? `${project.secondaryPdf}#page=1&zoom=page-fit&toolbar=0&navpanes=0&scrollbar=0`
    : "";
</script>

<div
  class="project-detail-page"
  style={`--project-accent: ${project.accent ?? "#6cb8ff"};`}
>
  <a class="back-link" href="/web-projects">
    <i class="fa-solid fa-arrow-left"></i>
    Back to Web Projects
  </a>

  <section class="detail-hero">
    <div class="detail-hero-copy">
      <p class="detail-kicker">{project.category}</p>
      <h1>{project.title}</h1>
      <p class="detail-summary">{project.summary}</p>
      <div class="detail-pill-row">
        {#each project.highlights ?? [] as highlight}
          <span>{highlight}</span>
        {/each}
      </div>
      {#if project.liveUrl}
        <a
          class="detail-view-btn"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the site
        </a>
      {/if}
    </div>

    <aside class="detail-facts">
      <div>
        <span>Year</span>
        <strong>{project.date}</strong>
      </div>
      <div>
        <span>Focus</span>
        <strong>{project.category}</strong>
      </div>
      <div>
        <span>Overview</span>
        <p>{project.overview}</p>
      </div>
    </aside>
  </section>

  <section class="detail-body">
    <div class="detail-media-column">
      {#if project.liveUrl}
        <a
          class="detail-media-link"
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.title} live site`}
        >
          <figure class="detail-media-frame detail-media-frame-large">
            <img
              src={project.heroImage}
              alt={project.heroAlt}
              loading="eager"
              decoding="async"
            />
          </figure>
        </a>
      {:else}
        <figure class="detail-media-frame detail-media-frame-large">
          <img
            src={project.heroImage}
            alt={project.heroAlt}
            loading="eager"
            decoding="async"
          />
        </figure>
      {/if}

      {#if project.secondaryPdf}
        <figure class="detail-media-frame detail-embed-frame detail-pdf-frame">
          <iframe
            src={secondaryPdfSrc}
            title={project.secondaryAlt ?? `${project.title} PDF`}
            loading="lazy"
          ></iframe>
        </figure>

        {#if project.secondaryVideo}
          <figure class="detail-media-frame detail-video-frame">
            <video
              src={project.secondaryVideo}
              poster={project.secondaryVideoPoster}
              controls
              playsinline
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </figure>
        {:else}
          <figure
            class="detail-media-frame detail-video-placeholder"
            aria-hidden="true"
          >
            <div class="video-placeholder-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#5e2a72"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                ><path d="M23 7l-7 5 7 5V7z"></path><rect
                  x="1"
                  y="5"
                  width="14"
                  height="14"
                  rx="2"
                ></rect></svg
              >
              <p>Video coming soon</p>
            </div>
          </figure>
        {/if}
      {:else if project.secondaryImage}
        <figure class="detail-media-frame detail-media-frame-small">
          <img
            src={project.secondaryImage}
            alt={project.secondaryAlt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      {/if}
      {#if project.gallery}
        <div class="detail-gallery-inline">
          {#each project.gallery as item}
            <figure
              class="detail-gallery-item inline"
              on:click={() => openLightbox(item.src)}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          {/each}
        </div>
      {/if}
    </div>

    <div class="detail-copy-column">
      {#if project.sections}
        {#each project.sections as section}
          <article class="detail-card">
            <p class="detail-card-label">{section.label}</p>
            <h2>{section.title}</h2>
            <p>{section.copy}</p>
          </article>
        {/each}
      {/if}

      <div class="detail-card detail-callout">
        <p class="detail-card-label">At a glance</p>
        <div class="detail-list">
          <div>
            <span>Skills</span>
            <strong>{(project.highlights || []).join(" / ")}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

  {#if lightboxOpen}
    <div
      class="lightbox"
      role="dialog"
      aria-modal="true"
      on:click={closeLightbox}
    >
      <div class="lightbox-inner" on:click|stopPropagation>
        <button
          class="lightbox-close"
          on:click={closeLightbox}
          aria-label="Close">×</button
        >
        <img src={lightboxSrc} alt="" />
      </div>
    </div>
  {/if}

  <footer class="detail-footer">
    {#if navigation.previous}
      <a
        class="detail-nav detail-nav-previous"
        href={`/web-projects/${navigation.previous.slug}`}
      >
        <span>Previous</span>
        <strong>{navigation.previous.title}</strong>
      </a>
    {/if}

    <a class="detail-nav detail-nav-home" href="/web-projects">
      <span>All Projects</span>
      <strong>Return to the web work grid</strong>
    </a>

    {#if navigation.next}
      <a
        class="detail-nav detail-nav-next"
        href={`/web-projects/${navigation.next.slug}`}
      >
        <span>Next</span>
        <strong>{navigation.next.title}</strong>
      </a>
    {/if}
  </footer>
</div>

<!-- styles are provided by src/scss/detail-project.scss (imported in src/scss/styles.scss) -->

<style>
  .detail-pdf-frame iframe {
    width: 100%;
    height: calc(100vh - 140px);
    min-height: 680px;
  }

  .detail-video-placeholder {
    display: grid;
    place-items: center;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.02)
    );
    min-height: 240px;
    padding: 24px;
    border-radius: 18px;
  }

  .video-placeholder-inner {
    display: flex;
    gap: 12px;
    align-items: center;
    color: #5e2a72;
    font-weight: 700;
    font-family: pop, sans-serif;
  }
</style>
