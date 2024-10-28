<script>
  import port from "$lib/images/portfolio.png";
  import helios from "$lib/images/x-proj-helios.png";
  import helium from "$lib/images/helium.jpg";
  import tempocx from "$lib/images/tempocx.jpg";
  import travel from "$lib/images/travelfly.jpg";
  import urban from "$lib/images/urbanappeal.png";

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
  <meta name="description" content="Megan Palmquistvpersonal portfolio" />
  <meta property="og:image" content={port} />
  <meta property="og:description" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="home-wrapper" id="home">
  <div class="home-desc-wrapper">
    <div class="background"></div>
    <!-- Added background div -->
    <div class="home-desc">
      <div class="home-con hiddenbottom2">
        <p class="intro">Hello, my name is</p>
        <h1>Megan Palmquist 😊</h1>
        <h1>
          Creative <span>web designer</span> and
          <span> digital storyteller</span>, blending
          <span>graphic design</span>
          to deliver
          <span>engaging </span>and <span> user-centered</span> experiences!
        </h1>
      </div>

      <div class="socials hiddenbottom3">
        <div class="social-box">
          <a
            href="https://www.linkedin.com/in/megan-palmquist/"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/megpalmq" target="_blank">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://www.instagram.com/megannstone_/" target="_blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="projects-wrapper" id="projects">
  <div class="projects-header">
    <h1>My Projects</h1>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a href="https://helios-summarizer-project.pages.dev/" target="_blank">
        <img src={helios} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://helios-summarizer-project.pages.dev/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://helios-summarizer-project.pages.dev/"
          class="project-title"
          target="_blank"
        >
          <h3>Helios Summarizer</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          Using an API and React, this project allows users to post a link to an
          article and get a summary of the article using OpenAI's GPT-4.
        </p>
        <div class="project-skills">
          <span>React</span>
          <span>SCSS</span>
          <span>Typescript</span>
          <span>RapidAPI</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://matspark1.github.io/Helium-Cloud-Gaming-Project/"
        target="_blank"
      >
        <img src={urban} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://urbanappealdetailing.com/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://urbanappealdetailing.com/"
          class="project-title"
          target="_blank"
        >
          <h3>Urban Appeal</h3>
        </a>
        <p class="date">Winter 2024</p>
        <p class="desc">
          A full stack website which advertsies and sells premium mobile
          detailing services, with the ability to book appointments.
        </p>
        <div class="project-skills">
          <span>SCSS</span>
          <span>jQuery</span>
          <span>SvelteKit</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://matspark1.github.io/Helium-Cloud-Gaming-Project/"
        target="_blank"
      >
        <img src={helium} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://matspark1.github.io/Helium-Cloud-Gaming-Project/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://matspark1.github.io/Helium-Cloud-Gaming-Project/"
          class="project-title"
          target="_blank"
        >
          <h3>Helium Gaming</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          This is a frontend project that features a cloud gaming platform
          providing a diverse library of games.
        </p>
        <div class="project-skills">
          <span>HTML</span>
          <span>SCSS</span>
          <span>jQuery</span>
          <span>MVC</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://in-info-web4.informatics.iupui.edu/~matspark/final-project/"
        target="_blank"
      >
        <img src={travel} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://in-info-web4.informatics.iupui.edu/~matspark/final-project/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://in-info-web4.informatics.iupui.edu/~matspark/final-project/"
          class="project-title"
          target="_blank"
        >
          <h3>TravelFly</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          This is a frontend project that employs a travel booking platform with
          a wide variety of bookings.
        </p>
        <div class="project-skills">
          <span>HTML</span>
          <span>SCSS</span>
          <span>jQuery</span>
          <span>MVC</span>
        </div>
      </div>
    </div>
  </div>
</div>
