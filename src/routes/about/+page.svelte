<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Meg from "$lib/images/me2.png";
  import Chase from "$lib/images/Chasecomp.png";
  import IU from "$lib/images/IUcomp.png";
  import HD from "$lib/images/HDcomp.png";
  import port from "$lib/images/portfolio.png";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/about") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
  if (currentUrl == "/about") {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
</script>

<svelte:head>
  <title>About</title>
  <meta name="description" content="About me" />
  <meta property="og:image" content={port} />
</svelte:head>

<div class="about-wrapper">
  <div class="about-main hidden">
    <img src={Meg} alt="" />
    <div class="about-desc">
      <h2>Hi , <br /><span>nice to meet you!</span></h2>
      <p>
        <br /> <br />From a young age, I've been fascinated with creation. In
        middle school, I first began selling graphics and designs tailored for
        User Interfaces.
        <br /> <br />
        My journey has led me through diverse work and creative environments and
        the skills that I have acquired along the way have equipped me with a versatile
        set of tools, allowing me to navigate challenges with adaptability and contribute
        effectively to various projects and teams.
      </p>
      <div class="about-skills">
        <span>Javascript</span>
        <span>jQuery</span>
        <span>Typescript</span>
        <span>PHP</span>
        <span>Python</span>
        <span>SQL</span>
        <span>Figma</span>
        <span>React</span>
        <span>Svelte</span>
        <span>Next.js</span>
      </div>
    </div>
  </div>

  <div class="companies">
    <div class="company-header hidden-about">
      <h1><span>Organizations</span> I've Been Involved With</h1>
    </div>
    <div class="company-box">
      <div class="company-img homedepot hidden-about">
        <img src={HD} alt="HD" />
      </div>
      <div class="company-img hidden-about">
        <img src={IU} alt="IU" />
      </div>
      <div class="company-img hidden-about">
        <img src={Chase} alt="Chase" />
      </div>
    </div>
  </div>
</div>
