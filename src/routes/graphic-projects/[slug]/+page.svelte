<script>
  import { onMount } from "svelte";

  export let data;

  let lightboxOpen = false;
  let lightboxSrc = "";
  let lightboxClass = "";

  function openLightbox(item) {
    lightboxSrc = item?.src ?? "";
    lightboxClass = item?.class ?? "";
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
</script>

<svelte:head>
  <title>{project.title} | Graphic Design Projects</title>
  <meta name="description" content={project.summary} />
  <meta property="og:image" content={project.heroImage} />
  <meta property="og:description" content={project.summary} />
</svelte:head>

<div class="project-detail-page" style={`--project-accent: ${project.accent};`}>
  <a class="back-link" href="/graphic-projects">
    <i class="fa-solid fa-arrow-left"></i>
    Back to Graphic Projects
  </a>

  <section class="detail-hero">
    <div class="detail-hero-copy">
      <p class="detail-kicker">{project.category}</p>
      <h1>{project.title}</h1>
      <p class="detail-summary">{project.summary}</p>
      <div class="detail-pill-row">
        {#each project.highlights as highlight}
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

      {#if project.secondaryImage}
        <figure class="detail-media-frame detail-media-frame-small">
          <img
            src={project.secondaryImage}
            alt={project.secondaryAlt}
            loading="lazy"
            decoding="async"
          />
        </figure>
      {/if}

      {#if project.videoSrc}
        <figure
          class="detail-media-frame detail-embed-frame detail-video-frame"
        >
          <video
            src={project.videoSrc}
            poster={project.videoPoster}
            autoplay
            muted
            loop
            playsinline
            controls
          />
        </figure>
      {/if}

      {#if project.gallery}
        <div class="detail-gallery-inline">
          {#each project.gallery as item}
            <figure
              class={"detail-gallery-item inline " + (item.class ?? "")}
              on:click={() => openLightbox(item)}
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
      {#each project.sections as section}
        <article class="detail-card">
          <p class="detail-card-label">{section.label}</p>
          <h2>{section.title}</h2>
          <p>{section.copy}</p>
        </article>
      {/each}

      <div class="detail-card detail-callout">
        <p class="detail-card-label">At a glance</p>
        <div class="detail-list">
          <div>
            <span>Skills</span>
            <strong>{project.highlights.join(" / ")}</strong>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- gallery moved inline into the media column; keep this section removed -->

  {#if lightboxOpen}
    <div
      class="lightbox"
      role="dialog"
      aria-modal="true"
      on:click={closeLightbox}
    >
      <div
        class={"lightbox-inner " + (lightboxClass ?? "")}
        on:click|stopPropagation
      >
        <button
          class="lightbox-close"
          on:click={closeLightbox}
          aria-label="Close">×</button
        >
        <img src={lightboxSrc} alt="" />
      </div>
    </div>
  {/if}
  {#if project.iframeSrc}
    <figure class="detail-media-frame detail-embed-frame detail-iframe-frame">
      <iframe
        src={project.iframeSrc}
        title={project.iframeTitle ?? `${project.title} iframe`}
        loading="lazy"
      ></iframe>
    </figure>
  {/if}

  <footer class="detail-footer">
    {#if navigation.previous}
      <a
        class="detail-nav detail-nav-previous"
        href={`/graphic-projects/${navigation.previous.slug}`}
      >
        <span>Previous</span>
        <strong>{navigation.previous.title}</strong>
      </a>
    {/if}

    <a class="detail-nav detail-nav-home" href="/graphic-projects">
      <span>All Projects</span>
      <strong>Return to the graphic work grid</strong>
    </a>

    {#if navigation.next}
      <a
        class="detail-nav detail-nav-next"
        href={`/graphic-projects/${navigation.next.slug}`}
      >
        <span>Next</span>
        <strong>{navigation.next.title}</strong>
      </a>
    {/if}
  </footer>
</div>

<style>
  .project-detail-page {
    width: min(1180px, calc(100vw - 32px));
    margin: 120px auto 64px;
    display: grid;
    gap: 24px;
    color: #2e0938;
  }

  .back-link {
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 999px;
    text-decoration: none;
    color: #ffffff;
    background: rgba(46, 9, 56, 0.75);
    border: 1px solid rgba(255, 255, 255, 0.16);
    box-shadow: 0 10px 30px rgba(46, 9, 56, 0.16);
    backdrop-filter: blur(10px);
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  .back-link:hover {
    transform: translateY(-2px);
    background: rgba(46, 9, 56, 0.9);
  }

  .detail-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, 0.8fr);
    gap: 24px;
    padding: 28px;
    border-radius: 30px;
    background: linear-gradient(
      145deg,
      rgba(46, 9, 56, 0.95),
      rgba(87, 58, 104, 0.9)
    );
    border: 1px solid rgba(255, 255, 255, 0.28);
    box-shadow: 0 24px 48px rgba(34, 13, 44, 0.22);
    color: #fff;
  }

  .detail-hero-copy {
    display: grid;
    gap: 16px;
    align-content: start;
  }

  .detail-kicker {
    width: fit-content;
    margin: 0;
    padding: 6px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.28);
    letter-spacing: 0.16em;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.92);
  }

  .detail-hero h1 {
    margin: 0;
    font-size: clamp(42px, 7vw, 78px);
    line-height: 0.95;
    max-width: 10ch;
  }

  .detail-summary {
    margin: 0;
    max-width: 62ch;
    font-size: 18px;
    line-height: 1.65;
    color: rgba(255, 255, 255, 0.88);
  }

  .detail-pill-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .detail-pill-row span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 13px;
    font-weight: 600;
  }

  .detail-facts {
    display: grid;
    gap: 14px;
    padding: 18px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(14px);
  }

  .detail-facts div {
    display: grid;
    gap: 6px;
    padding-bottom: 14px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .detail-facts div:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  .detail-facts span,
  .detail-card-label,
  .detail-list span {
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 11px;
    font-weight: 700;
    opacity: 0.78;
  }

  .detail-facts strong {
    font-size: 16px;
    line-height: 1.4;
  }

  .detail-facts p {
    margin: 0;
    color: rgba(255, 255, 255, 0.85);
    line-height: 1.6;
  }

  .detail-body {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(300px, 0.9fr);
    gap: 24px;
    align-items: start;
  }

  .detail-media-column,
  .detail-copy-column {
    display: grid;
    gap: 24px;
  }

  .detail-gallery-inline {
    display: block;
    margin-top: 18px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    padding-bottom: 6px;
  }

  .detail-gallery-inline::-webkit-scrollbar {
    display: none;
  }

  .detail-gallery-inline::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.18);
    border-radius: 10px;
  }

  .detail-gallery-inline .detail-gallery-item.inline {
    display: inline-flex;
    vertical-align: top;
    align-items: center;
    justify-content: center;
    width: min(630px, 60vw);
    height: auto;
    margin-right: 16px;
    /* allow the image to determine height so it won't be clipped */
    overflow: visible;
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.48);
    box-shadow: 0 12px 22px rgba(46, 9, 56, 0.06);
    margin-bottom: 50px;
    padding: 8px;
    background: rgba(255, 255, 255, 0.02);
  }

  .detail-gallery-inline .detail-gallery-item.inline img {
    display: block;
    width: auto;
    max-width: 100%;
    /* constrain by viewport height so tall images are fully visible */
    max-height: 86vh;
    object-fit: contain;
    background: rgba(255, 255, 255, 0.03);
  }

  /* Hover/focus animation for gallery thumbnails */
  .detail-gallery-inline .detail-gallery-item.inline {
    transition:
      transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1),
      box-shadow 220ms ease;
  }

  .detail-gallery-inline .detail-gallery-item.inline:focus,
  .detail-gallery-inline .detail-gallery-item.inline:hover {
    transform: translateY(-6px) scale(1.02);
    box-shadow: 0 20px 40px rgba(46, 9, 56, 0.12);
  }

  .detail-gallery-inline .detail-gallery-item.inline img {
    transition: transform 280ms ease;
  }

  .detail-gallery-inline .detail-gallery-item.inline:focus img,
  .detail-gallery-inline .detail-gallery-item.inline:hover img {
    transform: scale(1.02);
  }

  /* shrink poster-style images so they don't dominate the inline gallery */
  .detail-gallery-inline .detail-gallery-item.inline.is-poster {
    width: min(380px, 36vw);
  }

  .detail-gallery-inline .detail-gallery-item.inline.is-poster img {
    object-fit: contain;
    background: rgba(255, 255, 255, 0.06);
  }

  /* captions removed for inline gallery items */

  /* Keep the facts box sticky but avoid double-scroll by not making the copy column scrollable */
  .detail-facts {
    position: sticky;
    top: var(--sticky-header-top, 112px);
    align-self: start;
  }

  .detail-copy-column {
    display: grid;
    gap: 24px;
  }

  .detail-media-frame {
    margin: 0;
    overflow: hidden;
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.22);
    border: 1px solid rgba(255, 255, 255, 0.34);
    box-shadow: 0 18px 34px rgba(46, 9, 56, 0.16);
  }

  .detail-media-frame img {
    display: block;
    width: 100%;
    height: auto;
  }

  .detail-card {
    padding: 24px;
    border-radius: 26px;
    background: rgba(255, 255, 255, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.42);
    box-shadow: 0 16px 30px rgba(46, 9, 56, 0.1);
    backdrop-filter: blur(12px);
  }

  .detail-card h2 {
    margin: 8px 0 10px;
    font-size: 24px;
    line-height: 1.12;
    color: #2e0938;
  }

  .detail-card p {
    margin: 0;
    color: rgba(46, 9, 56, 0.86);
    line-height: 1.7;
  }

  .detail-list {
    display: grid;
    gap: 18px;
  }

  .detail-list div {
    display: grid;
    gap: 6px;
    padding: 14px 0;
    border-top: 1px solid rgba(46, 9, 56, 0.12);
  }

  .detail-list strong {
    color: #2e0938;
    line-height: 1.5;
  }

  .detail-footer {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    padding-bottom: 24px;
  }

  .detail-nav {
    display: grid;
    gap: 8px;
    padding: 20px 22px;
    border-radius: 22px;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.7);
    color: #2e0938;
    border: 1px solid rgba(255, 255, 255, 0.46);
    box-shadow: 0 14px 26px rgba(46, 9, 56, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .detail-nav:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 32px rgba(46, 9, 56, 0.14);
  }

  .detail-nav span {
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--project-accent);
    font-weight: 700;
  }

  .detail-nav strong {
    font-size: 18px;
    line-height: 1.35;
  }

  .detail-nav-home {
    background: linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.82),
      rgba(255, 255, 255, 0.68)
    );
  }

  /* Lightbox styles for click-to-enlarge */
  .lightbox {
    position: fixed;
    inset: 0;
    display: grid;
    place-items: center;
    background: rgba(12, 12, 14, 0.75);
    z-index: 1400;
    /* offset the top padding so the lightbox content sits below any sticky nav/header */
    padding: calc(var(--sticky-header-top, 112px) + 28px) 28px 28px 28px;
    /* entrance animation */
    animation: lightbox-fade 180ms ease both;
  }

  .lightbox-inner {
    position: relative;
    max-width: 90vw;
    /* reduce available height so top isn't obscured by a sticky header */
    max-height: calc(100vh - var(--sticky-header-top, 112px) - 56px);
    width: auto;
    height: auto;
    display: grid;
    place-items: center;
    border-radius: 12px;
    overflow: hidden;
    padding: 12px;
    /* pop-in animation for the inner card */
    transform-origin: center center;
    animation: lightbox-pop 220ms cubic-bezier(0.2, 0.85, 0.25, 1) both;
  }

  .lightbox-inner img {
    display: block;
    /* slightly larger so images are more visible but still framed */
    max-width: min(86vw, 760px);
    max-height: calc(100vh - var(--sticky-header-top, 112px) - 100px);
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 30px 60px rgba(2, 6, 23, 0.6);
  }

  /* when the opened image is a poster, scale it to fit the frame so the whole poster is visible */
  .lightbox-inner.is-poster {
    overflow: hidden;
  }

  .lightbox-inner.is-poster img {
    /* posters a bit larger but contained so they fit comfortably */
    max-width: min(80vw, 720px);
    max-height: calc(100vh - var(--sticky-header-top, 112px) - 100px);
    width: auto;
    height: auto;
    object-fit: contain;
  }

  .lightbox-close {
    position: absolute;
    top: -10px;
    right: -10px;
    background: #fff;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 999px;
    font-size: 22px;
    line-height: 1;
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: 0 8px 18px rgba(2, 6, 23, 0.3);
  }

  /* Animations */
  @keyframes lightbox-fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes lightbox-pop {
    from {
      transform: translateY(8px) scale(0.98);
      opacity: 0.96;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }

  @media (max-width: 960px) {
    .project-detail-page {
      width: min(1180px, calc(100vw - 22px));
      margin-top: 108px;
    }

    .detail-hero,
    .detail-body,
    .detail-footer {
      grid-template-columns: 1fr;
    }

    .detail-hero h1 {
      max-width: none;
    }

    .detail-gallery-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .project-detail-page {
      margin-top: 100px;
    }

    .detail-hero,
    .detail-card,
    .detail-facts,
    .detail-nav {
      border-radius: 22px;
    }

    .detail-hero {
      padding: 22px;
    }

    .detail-card,
    .detail-facts,
    .detail-nav {
      padding: 18px;
    }

    .detail-footer {
      gap: 12px;
      padding-bottom: 12px;
    }

    .detail-nav {
      width: 100%;
      gap: 6px;
    }

    .detail-nav strong {
      font-size: 16px;
      line-height: 1.3;
    }
  }
</style>
