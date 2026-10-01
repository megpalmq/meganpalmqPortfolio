<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  import ENJ from "$lib/images/ENJLOGO-WhiteText.png";
  import yonseiL from "$lib/images/yonseiL.png";
  import KFT from "$lib/images/KFT.png";
  import port from "$lib/images/portfolio.png";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl === "/about") {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  });
  function reveal(node) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    return {
      destroy() {
        observer.disconnect();
      },
    };
  }

  const developmentSkills = [
    "HTML",
    "CSS / SCSS",
    "JavaScript",
    "TypeScript",
    "Svelte",
    "Next.js",
    "WordPress",
    "PHP",
    "SQL",
    "jQuery",
    "Git",
    "Responsive Design",
    "Shopify",
  ];

  const designSkills = [
    "Figma",
    "Adobe Creative Suite",
    "UX / UI Design",
    "Branding",
    "Wireframing",
    "Prototyping",
    "Typography",
    "Design Systems",
    "Illustration",
  ];
</script>

<svelte:head>
  <title>About Megan Palmquist | Portfolio</title>

  <meta
    name="description"
    content="Learn more about Megan Palmquist, a multidisciplinary designer specializing in web design, front-end development, branding, and graphic design."
  />

  <meta property="og:title" content="About Megan Palmquist | Portfolio" />

  <meta
    property="og:description"
    content="Meet Megan Palmquist, a multidisciplinary designer specializing in web design, development, branding, and graphic design."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="about-page">
  <!-- =====================================================
       HERO
  ====================================================== -->

  <section class="about-hero" use:reveal>
    <div class="about-hero-content">
      <div class="about-hero-copy">
        <div class="section-label">
          <span>About</span>
          <i>/</i>
        </div>

        <span class="hero-number"> 01 </span>

        <h1>
          Nice to meet you.

          <strong style="color:	#8451A6"> I'm Megan. </strong>
        </h1>

        <div class="hero-line"></div>

        <p class="hero-intro">
          I'm Megan Palmquist, a front-end developer and multidisciplinary
          designer who loves creating thoughtful digital experiences that are
          both beautiful and functional. I'm also the founder and owner of MSP
          Studios, my independent design studio.
        </p>

        <a href="/web-projects" class="hero-link">
          See my web work
          <i class="fa-solid fa-arrow-right"></i>
        </a>

        <a
          href="https://www.mspstudios.co"
          class="hero-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit MSP Studios
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>

      <div class="about-hero-image">
        <div class="portrait-wrap">
          <div class="portrait-glow"></div>

          <div class="portrait"></div>
        </div>

        <div class="portrait-note">
          designer
          <br />
          at heart ♡
        </div>

        <div class="orbit-line orbit-one"></div>

        <div class="orbit-line orbit-two"></div>

        <span class="orbit-dot"></span>

        <span class="orbit-star">✦</span>
      </div>
    </div>
  </section>

  <!-- =====================================================
       WHAT I DO
  ====================================================== -->

  <section class="about-split-section">
    <article class="about-panel what-i-do" use:reveal>
      <div class="panel-heading">
        <span class="panel-icon">
          <i class="fa-solid fa-code"></i>
        </span>

        <div>
          <p>What I Do</p>
          <span></span>
        </div>
      </div>

      <div class="what-layout">
        <h2>
          I work where
          <em>design</em>
          meets
          <em>development.</em>
        </h2>

        <div class="discipline-list">
          <div class="discipline-item">
            <span class="discipline-icon">
              <i class="fa-solid fa-code"></i>
            </span>

            <p>
              Front-end
              <br />
              Development
            </p>
          </div>

          <div class="discipline-item">
            <span class="discipline-icon">
              <i class="fa-solid fa-arrow-pointer"></i>
            </span>

            <p>
              UX / UI
              <br />
              Design
            </p>
          </div>

          <div class="discipline-item">
            <span class="discipline-icon">
              <i class="fa-solid fa-pen-nib"></i>
            </span>

            <p>
              Brand
              <br />
              Design
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- =================================================
         MY APPROACH
    ================================================== -->

    <article class="about-panel approach" use:reveal>
      <div class="panel-heading">
        <span class="panel-icon">
          <i class="fa-regular fa-heart"></i>
        </span>

        <div>
          <p>My Approach</p>
          <span></span>
        </div>
      </div>

      <div class="approach-content">
        <div class="quote-mark">“</div>

        <blockquote>
          Clear,
          <em>expressive,</em>
          and enjoyable to use.
        </blockquote>

        <p>
          I care about the details: pacing, motion, typography, and color
          systems — the things that turn good design into great experiences.
        </p>

        <p class="font-note">
          And yes, I'm almost always thinking about fonts.
        </p>
      </div>
    </article>
  </section>

  <!-- =====================================================
       TOOLS & CAPABILITIES
  ====================================================== -->

  <section class="skills-section about-panel">
    <span class="ghost-section-number"> 02 </span>

    <div class="panel-heading">
      <span class="panel-icon">
        <i class="fa-solid fa-wrench"></i>
      </span>

      <div>
        <p>Tools & Capabilities</p>
        <span></span>
      </div>
    </div>

    <div class="skills-columns">
      <!-- DEVELOPMENT -->

      <div class="skills-column">
        <p class="skills-label">01 / Development</p>

        <div class="skill-list">
          {#each developmentSkills as skill}
            <span>
              {skill}
            </span>
          {/each}
        </div>
      </div>

      <!-- DESIGN -->

      <div class="skills-column">
        <p class="skills-label">02 / Design</p>

        <div class="skill-list">
          {#each designSkills as skill}
            <span>
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- =====================================================
       TYPOGRAPHY MOMENT
  ====================================================== -->

  <section class="type-feature" use:reveal>
    <div class="type-copy">
      <p class="section-label">And yes,</p>

      <h2>
        I'm almost always
        <br />
        thinking about
        <em>fonts.</em>
      </h2>
    </div>

    <div class="type-divider"></div>

    <p class="type-description">
      Typography tells a story before a single word is even read.
    </p>

    <div class="type-display">Aa</div>

    <span class="type-spark">✦</span>
  </section>

  <!-- =====================================================
       SELECTED EXPERIENCE
  ====================================================== -->

  <section class="experience-section about-panel" use:reveal>
    <span class="ghost-section-number"> 03 </span>

    <div class="panel-heading">
      <span class="panel-icon">
        <i class="fa-solid fa-briefcase"></i>
      </span>

      <div>
        <p>Selected Experience</p>
        <span></span>
      </div>
    </div>

    <div class="experience-line"></div>

    <div class="experience-grid">
      <!-- KUNG FU TEA -->

      <article class="experience-card">
        <span class="experience-year"> 01 </span>

        <div class="experience-logo experience-logo-kft">
          <a
            href="https://www.kungfutea.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={KFT} alt="Kung Fu Tea" loading="lazy" decoding="async" />
          </a>
        </div>

        <p class="experience-type">Organization</p>
      </article>

      <!-- EVERY NEW JOY -->

      <article class="experience-card">
        <span class="experience-year"> 02 </span>

        <div class="experience-logo">
          <img src={ENJ} alt="Every New Joy" loading="lazy" decoding="async" />
        </div>

        <p class="experience-type">Brand + Web Design</p>
      </article>

      <!-- YONSEI -->

      <article class="experience-card">
        <span class="experience-year"> 03 </span>

        <div class="experience-logo">
          <a
            href="https://www.yonsei.ac.kr/en_sc/index.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={yonseiL}
              alt="Yonsei University"
              loading="lazy"
              decoding="async"
            />
          </a>
        </div>

        <p class="experience-type">Design Collaboration</p>
      </article>
    </div>
  </section>

  <!-- =====================================================
       CONTACT CTA
  ====================================================== -->

  <section class="about-cta" use:reveal>
    <div class="cta-stars">✦</div>

    <div class="cta-question">
      Let's Create Something
      <br />
      Great
    </div>

    <div class="cta-divider"></div>

    <div class="cta-action">
      <p>
        I'm currently open to full-time opportunities in web development and
        graphic design. If you think I'd be a good fit for your team, I'd love
        to connect.
      </p>

      <a href="mailto:meganpalmquist@outlook.com" class="cta-button">
        Let's Connect
        <i class="fa-regular fa-paper-plane"></i>
      </a>
      <a href="/resume" class="cta-button">
        View Résumé
        <i class="fa-regular fa-file"></i>
      </a>
    </div>

    <div class="cta-globe">◎</div>
  </section>
</div>
