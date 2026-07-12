<script>
  import port from "$lib/images/portfolio.png";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
  if (currentUrl == "/") {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
</script>

<svelte:head>
  <title>Megan Palmquist</title>
  <meta name="description" content="Megan Palmquist personal portfolio" />
  <meta property="og:image" content={port} />
  <meta property="og:description" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="home-wrapper" id="home">
  <div class="home-desc-wrapper">
    <div class="home-desc">
      <div class="home-desc-container hiddenbottom2">
        <p class="intro">Hi, welcome to</p>
        <h1>Megan Palmquist.</h1>
        <h1>
          I am a <span>web developer/ graphic designer/ and UX/UI designer</span
          >,
        </h1>
        <h1 class="dev-desc">
          dedicated to crafting <span>engaging</span> and
          <span>meaningful</span> digital experiences.
        </h1>
      </div>
    </div>
  </div>
</div>

<div class="projects-wrapper" id="projects">
  <div class="projects-header">
    <h1>My Projects</h1>
  </div>
  <div class="projects-header-under"></div>
</div>
<div class="socials hidden">
  <div class="social-box">
    <a href="https://www.linkedin.com/in/megan-palmquist/" target="_blank">
      <i class="fa-brands fa-linkedin-in"></i></a
    >
    <a href="https://github.com/megpalmq" target="_blank"
      ><i class="fa-brands fa-github"></i></a
    >
    <a href="https://www.instagram.com/megannstone_/" target="_blank"
      ><i class="fa-brands fa-instagram"></i></a
    >
  </div>
</div>
