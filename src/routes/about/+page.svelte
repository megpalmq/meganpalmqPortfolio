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
    if (currentUrl == "/about") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About me" />
  <meta property="og:image" content={port} />
</svelte:head>

<div class="about-wrapper">
  <div class="about-main hidden">
    <div class="meg"></div>
    <div class="about-desc">
      <h2>Nice to meet you!</h2>
      <p>
        Hi, I'm Megan. I work across front-end web development, UX/UI, and brand design, and I
        love combining technical execution with strong visual storytelling.
      </p>
      <p>
        I'm studying Media Arts and Science at IU Indianapolis, specializing in Web Design,
        Development, and Digital Storytelling with a minor in Graphic Design. That mix lets me
        design the experience and build it end-to-end.
      </p>
      <p>
        I care deeply about the details: pacing, motion, typography, and color systems that make a
        product feel intentional. My goal is always to create work that is clear, expressive, and
        enjoyable to use.
      </p>
      <p>
        I build with tools like React, Next.js, Svelte, and jQuery, and design in Figma and Adobe
        Creative Suite. I like experimenting, refining, and pushing projects until they feel right.
      </p>
      <p>And yes, I'm almost always thinking about fonts.</p>

      <div class="about-skills">

        <div class="skills-category1">
        <h3>Development</h3>
        <span>HTML</span>
        <span>CSS</span>
        <span>SCSS</span>
        <span>JavaScript</span>
        <span>WordPress</span>
        <span>jQuery</span>
        <span>TypeScript</span>
        <span>PHP</span>
        <span>SQL</span>
        <span>Svelte</span>
        <span>Next.js</span>
        </div>
        <div class="skills-category2">
        <h3>Design</h3>
        <span>Figma</span>
        <span>Adobe Creative Suite</span>
        <span>UX/UI Design</span>
        <span>Branding</span>
        <span>Wireframing</span>
        <span>Prototyping</span>
        </div>
        
      </div>
    </div>
  </div>

  <div class="companies">
    <div class="company-header hidden-about">
      <h1><span>Organizations</span> I've Been Involved With</h1>
    </div>
    <div class="company-box">
      <div class="company-img homedepot hidden-about">
        <a
          href="https://www.kungfutea.com/?srsltid=AfmBOopL4IReX1ZBpGis6pQJAxMIyrB2yQU5Vkq7gaLXUBd34_rjtcOs"
          target="_blank"
        >
          <img src={KFT} alt="Kung Fu Tea" loading="lazy" decoding="async" /></a
        >
      </div>
      <div class="company-img hidden-about">
        <a href="https://www.yonsei.ac.kr/en_sc/index.do" target="_blank" rel="noopener noreferrer">
          <img src={yonseiL} alt="IU" loading="lazy" decoding="async" />
        </a>
      </div>
      <div class="company-img hidden-about">
        <img src={ENJ} alt="Ever New Joy" loading="lazy" decoding="async" />
        <p class="enj-credit">I designed that :)</p>
      </div>
    </div>
  </div>
</div>
