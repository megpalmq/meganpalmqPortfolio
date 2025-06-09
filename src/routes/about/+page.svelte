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
    <div class="meg"></div>
    <div class="about-desc">
      <h2>Hi , <span>nice to meet you!</span></h2>
      <p>
        <br /> <br />I'm Megan—a passionate web and graphic designer with a
        knack for crafting innovative digital experiences. As a junior at
        Indiana University Indianapolis, I'm pursuing a degree in Media Arts and
        Science with a specialization in <span> web design, development</span>,
        and <span>digital storytelling</span>. I also am minoring in
        <span>graphic design</span>. My work seamlessly blends functionality and
        creativity, ensuring each project not only meets the client's needs but
        also leaves a lasting impression.
        <br /> <br />
        From designing intuitive user interfaces to developing dynamic websites,
        my journey has been fueled by a deep curiosity for technology and an eye
        for design. Whether I'm collaborating on international projects like my work
        with Yonsei University or diving into independent creative challenges, I
        strive to create meaningful and impactful designs. With a versatile skill
        set, including proficiency in modern frameworks and tools like React, Svelte,
        and Figma, I'm ready to take on the next exciting opportunity.
      </p>
      <div class="about-skills">
        <span>Javascript</span>
        <span>jQuery</span>
        <span>Typescript</span>
        <span>PHP</span>
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
        <img src={KFT} alt="Kung Fu Tea" />
      </div>
      <div class="company-img hidden-about">
        <img src={yonseiL} alt="IU" />
      </div>
      <div class="company-img hidden-about">
        <img src={ENJ} alt="Ever New Joy" />
      </div>
    </div>
  </div>
</div>
