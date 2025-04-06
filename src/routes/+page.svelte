<script>
  import port from "$lib/images/portfolio.png";
  import helios from "$lib/images/x-proj-helios.png";
  import jungle from "$lib/images/junglecook.png";
  import pokemon from "$lib/images/pokemon.png";
  import yonsei from "$lib/images/yonsei.png";
  import amend from "$lib/images/amend.png";
  import helium from "$lib/images/helium.jpg";
  import happy from "$lib/images/happy.png";
  import tempocx from "$lib/images/tempocx.jpg";
  import travel from "$lib/images/travelfly.jpg";
  import keurig from "$lib/images/keurig.png";
  import urban from "$lib/images/urbanappeal.png";
  import DFD from "$lib/images/DFD.png";
  import CYS from "$lib/images/CYS.png";
  import FOV from "$lib/images/FOV.png";
  import Osaka from "$lib/images/Osaka.jpg";
  import FD from "$lib/images/FreezeDry.png";

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
    <div class="home-desc">
      <div class="home-con hiddenbottom2">
        <p class="intro">Hello, my name is</p>
        <h1><span class="name">Megan Palmquist </span></h1>
        <h1>
          Creative web designer and digital storyteller, blending graphic design
          to deliver engaging and <br />
          user-centered experiences!
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
<div class="border">
  <div class="seemore">
    See my projects <i class="fa-solid fa-angle-down"></i>
  </div>
</div>

<div class="projects-wrapper" id="projects">
  <div class="projects-header">
    <h1>My Web Projects 🖥️</h1>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a href="https://design-for-dignity.vercel.app/" target="_blank">
        <img src={DFD} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://design-for-dignity.vercel.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://github.com/megpalmq/DesignForDignity"
          class="project-title"
          target="_blank"
        >
          <h3>Design For Dignity</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          The Design for Dignity website is a collaborative project dedicated to
          showcasing design solutions that promote dignity and accessibility. It
          features a seamless backend for optimal functionality and a
          thoughtfully crafted frontend design. The site highlights the
          initiative's mission, projects, and impact, serving as a platform for
          meaningful design work aimed at improving lives.
        </p>
        <div class="project-skills">
          <span>SCSS</span>
          <span>HTML</span>
          <span>JavaScript</span>
          <span>jQuery</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a href="https://keurigcopycat.vercel.app/" target="_blank">
        <img src={keurig} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://keurigcopycat.vercel.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://github.com/megpalmq/315Final"
          class="project-title"
          target="_blank"
        >
          <h3>Keurig CopyCat</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          An exact replica of the Keurig website, including a fully functional
          login/sign-up page and cart system, showcasing attention to detail and
          interactive features.<br /> <br />Site I was meant to replicate:
          <a
            href="https://www.keurig.com/c/coffeemakers101?cm_sp=bo+cybermonday21-_-promo+hero+banner-_-shop+coffee+makers"
            target="_blank"
            class="here">Here</a
          >
        </p>
        <div class="project-skills">
          <span>MVC Model</span>
          <span>SCSS</span>
          <span>HTML</span>
          <span>JavaScript</span>
          <span>jQuery</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a href="https://curling-you-say2.vercel.app" target="_blank">
        <img src={CYS} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://curling-you-say2.vercel.app/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://github.com/megpalmq/CurlingYouSay2"
          class="project-title"
          target="_blank"
        >
          <h3>Curling You Say?</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          This curling UI/UX website is a modern, interactive platform built
          with Next.js and Sass. It features user authentication, allowing
          account creation and login, alongside dynamic visuals and smooth
          navigation. The site highlights curling rules, strategies, and player
          insights, offering an engaging experience for all users.
        </p>
        <div class="project-skills">
          <span>SCSS</span>
          <span>Next.js</span>
          <span>JavaScript</span>
          <span>Clerk</span>
          <span>User Authentication</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://pokemon-pages-real.vercel.app/?vercelToolbarCode=QpR1RGlppeyOq5h"
        target="_blank"
      >
        <img src={pokemon} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://pokemon-pages-real.vercel.app/?vercelToolbarCode=QpR1RGlppeyOq5h"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://github.com/megpalmq/pokemon-pagesReal"
          class="project-title"
          target="_blank"
        >
          <h3>Pokemon API</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          A fun and interactive project where users can select their favorite
          Pokémon and save it to a personal favorites menu, demonstrating API
          integration and dynamic content management.
        </p>
        <div class="project-skills">
          <span>HTML</span>
          <span>SCSS</span>
          <span>JavaScript</span>
          <span>NextJs</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://in-info-web4.luddy.indianapolis.iu.edu/~megpalmq/oldProjects/homework-seven/homework-seven/"
        target="_blank"
      >
        <img src={travel} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://in-info-web4.luddy.indianapolis.iu.edu/~megpalmq/oldProjects/homework-seven/homework-seven/"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://github.com/n215-megpalmq/homework-seven"
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
<div class="projects-wrapper" id="projects2">
  <div class="projects-header">
    <h1>My Graphic <br /> Design Projects 🎨</h1>
  </div>
  <div class="projects-header-under"></div>
  <div class="project-boxes">
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics"
        target="_blank"
      >
        <img src={Osaka} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/222967549/Osaka-2036-Olympics"
          class="project-title"
          target="_blank"
        >
          <h3>Osaka 2036 Olympics</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          For this project, I created a complete brand identity for the Olympics
          in Osaka, Japan. To develop an authentic and visually striking brand,
          I first studied Osaka's culture, history, and design influences. The
          project encompassed designing a distinctive logo, brochure, poster,
          custom pattern, event tickets, lanyard, and website mockup. Drawing
          inspiration from Osaka's dynamic cityscape, traditional art, and
          modern innovation, the branding captures the essence of both the city
          and the Olympic Games. The result is a visually compelling and
          culturally authentic brand that seamlessly integrates Osaka's unique
          identity into the global Olympic experience.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Indesign</span>
          <span>Figma</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/223089271/Freeze-Dried? "
        target="_blank"
      >
        <img src={FD} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/223089271/Freeze-Dried?"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/223089271/Freeze-Dried?"
          class="project-title"
          target="_blank"
        >
          <h3>Freeze Dried</h3>
        </a>
        <p class="date">Spring 2025</p>
        <p class="desc">
          For this branding and packaging project, I designed a playful and
          vibrant identity for a freeze-dried candy brand. Inspired by the cool,
          frozen process of freeze-drying, I focused on using icy colors and
          dynamic typography to reflect the candy's light, airy texture. The
          packaging design features bold, modern elements that stand out on
          shelves, aiming to capture the fun and refreshing qualities of the
          product. This project showcases my ability to create engaging,
          eye-catching designs that connect with a youthful audience.
        </p>
        <div class="project-skills">
          <span>Branding</span>
          <span>Product Design</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/218521699/Fragments-of-Vulnerability"
        target="_blank"
      >
        <img src={FOV} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/218521699/Fragments-of-Vulnerability"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
          class="project-title"
          target="_blank"
        >
          <h3>Fragments of Vulnerability</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          The Vulnerability Zine is a typography-focused project that tells the
          powerful, real-life story of an individual affected by human
          trafficking. Through expressive typography and design, the zine
          captures the emotional depth of the experience, using visual
          storytelling to raise awareness and foster empathy for those impacted
          by this issue.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
        target="_blank"
      >
        <img src={yonsei} alt="" /></a
      >
      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
          class="project-title"
          target="_blank"
        >
          <h3>Yonsei x Herron</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          A typography-driven design project that explores the collaboration
          between Yonsei University and Herron School of Art and Design. The
          project is 2 infographic poster that talk about food insecurity in
          Seoul South Korea and Indianapolis Indiana.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Illustrator</span>
          <span>Typography</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/211130921/The-Happiness-Project"
        target="_blank"
      >
        <img src={happy} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/211130921/The-Happiness-Project"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/211130921/The-Happiness-Project"
          class="project-title"
          target="_blank"
        >
          <h3>The Happiness Project</h3>
        </a>
        <p class="date">Fall 2024</p>
        <p class="desc">
          A booklet-style project designed to educate and guide the audience
          through the experience of a panic attack, offering insights into its
          emotional and physical symptoms. The project also provides helpful
          strategies and techniques for managing and overcoming panic attacks,
          creating a compassionate and informative resource for those seeking
          support.
        </p>
        <div class="project-skills">
          <span>Indesign</span>
          <span>Typography</span>
          <span>Adobe Creative Suite</span>
        </div>
      </div>
    </div>
    <div class="project-box hidden">
      <a
        href="https://www.behance.net/gallery/208625381/Amendment-Poster-Series"
        target="_blank"
      >
        <img src={amend} alt="" /></a
      >

      <div class="project-desc">
        <a
          href="https://www.behance.net/gallery/208625381/Amendment-Poster-Series"
          class="arrow-link"
          target="_blank"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
        <a
          href="https://www.behance.net/gallery/208625381/Amendment-Poster-Series"
          class="project-title"
          target="_blank"
        >
          <h3>Democracy Plaza</h3>
        </a>
        <p class="date">Fall 2023</p>
        <p class="desc">
          This project explores the 27 amendments to the U.S. Constitution,
          focusing on women's rights. It highlights the original exclusion of
          women from the Constitution, with emphasis on the 19th Amendment
          granting women the right to vote. The poster series reimagines one
          amendment to enhance inclusivity for women, particularly women of
          color, and addresses ongoing social issues. It also advocates for
          changes that further women's rights, emphasizing the intersection of
          freedom of speech, press, and voting with women's equality.
        </p>
        <div class="project-skills">
          <span>Typography</span>
          <span>Indesign</span>
        </div>
      </div>
    </div>
  </div>
  <div class="aboutme">
    <a href="/about" class="aboutme-link"
      >About Me <i class="fa-solid fa-arrow-right"></i></a
    >
  </div>
</div>
