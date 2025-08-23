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
      <h2>Nice to meet you!</h2>
      <p>
        <br />
        Hi, I'm Megan. I make websites that move, glow, scroll… and sometimes even
        talk. I'm a web and graphic designer who likes mixing function with a little
        bit of fun—because why not make things work and look cool?
        <br />
        <br /> I'm currently studying Media Arts and Science at IU Indianapolis,
        specializing in web design, development, and digital storytelling. I'm
        also minoring in Graphic Design. Basically, I like building sleek,
        creative websites that actually work the way you want them to. And if I
        can sneak in some unexpected animations or weird typography choices,
        even better.
        <br /> <br />
        I spend a lot of time experimenting—whether that's with code, color, or the
        perfect hover state. I care about the little things. The way a page feels.
        The way a design communicates before you even read it.
        <br />
        <br /> Lately, I've been building with tools like React, Next.js, and
        jQuery. I design in Figma, animate with CSS and JavaScript, and
        occasionally break things just to figure out how to fix them. I love
        trying out new tools, experimenting with styles, and obsessing over the
        details most people scroll right past.
        <br />
        <br />
        And yes, I'm probably thinking about fonts right now.
      </p>
      <div class="about-skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>SCSS</span>
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
        <a
          href="https://www.kungfutea.com/?srsltid=AfmBOopL4IReX1ZBpGis6pQJAxMIyrB2yQU5Vkq7gaLXUBd34_rjtcOs"
          target="_blank"
        >
          <img src={KFT} alt="Kung Fu Tea" /></a
        >
      </div>
      <div class="company-img hidden-about">
        <a href="https://www.yonsei.ac.kr/en_sc/index.do">
          <img src={yonseiL} alt="IU" />
        </a>
      </div>
      <div class="company-img hidden-about">
        <img src={ENJ} alt="Ever New Joy" />
      </div>
    </div>
  </div>
</div>
