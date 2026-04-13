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
  Hi, I'm Megan. I'm into a lot of different corners of design—front-end web, UX/UI, brand design, etc. I like combining the technical side of coding with the creative side of design to build things that not only work but also feel good to use.
  <br><br>
  I'm studying Media Arts and Science at IU Indianapolis, specializing in Web Design, Development, and Digital Storytelling, with a minor in Graphic Design. That's given me the chance to dive into both the coding side of projects and the storytelling side of design.
  <br><br>
  What I really care about is how things feel. A page that scrolls just right, a logo that makes sense for the brand, a color palette that communicates before you even read the text. I like the details, the small things most people don't notice but would miss if it wasn't there.
  <br><br>
  I work with tools like React, Next.js, and jQuery for building, and Figma and Adobe for design. I love experimenting, breaking things, fixing them, and finding new ways to make my work a little more fun and a little more unexpected.
  <br><br>
  And yeah… I'm almost always thinking about fonts.
</p>

      <div class="about-skills">

        <div class="skills-category1">
        <h3>Development:</h3>
        <span>HTML</span>
        <span>CSS</span>
        <span>SCSS</span>
        <span>Javascript</span>
        <span>WordPress</span>
        <span>jQuery</span>
        <span>Typescript</span>
        <span>PHP</span>
        <span>SQL</span>
        <span>Svelte</span>
        <span>Next.js</span>
        </div>
        <div class="skills-category2">
        <h3>Design:</h3>
        <span>Figma</span>
        <span>Adobe Creative Suite</span>
        <br>
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
        <a href="https://www.yonsei.ac.kr/en_sc/index.do">
          <img src={yonseiL} alt="IU" loading="lazy" decoding="async" />
        </a>
      </div>
      <div class="company-img hidden-about">
        <img src={ENJ} alt="Ever New Joy" loading="lazy" decoding="async" />
        <br>
        <br>
        <p style="font-family: pop;  color: rgb(87, 58, 104);">I designed that ^  :) </p>
      </div>
    </div>
  </div>
</div>
