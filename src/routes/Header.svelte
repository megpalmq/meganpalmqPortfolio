<script>
  import { page } from "$app/stores";

  $: currentPath = $page.url.pathname;

  function isActive(path) {
    return currentPath === path;
  }
</script>

<div class="nav-holder">
  <div class="black-box"></div>
  <div class="logo">
    <a href="/">
      <p class="reg-logo">Megan <span>Palmquist</span></p>
      <p class="mobile-logo">
        M<span>P</span>
      </p>
    </a>
  </div>
  <nav>
    <ul>
      <li>
        <a
          href="/web-projects"
          class="nav-links"
          class:active={isActive("/web-projects")}
          >Web Projects</a
        >
      </li>
      <li>
        <a
          href="/graphic-projects"
          class="nav-links"
          class:active={isActive("/graphic-projects")}
          >Graphic Design Projects</a
        >
      </li>
      <li>
        <a href="/about" class="nav-links" class:active={isActive("/about")}
          >About</a
        >
      </li>
      <li>
        <a
          href="/resume"
          class="resume-link button-pulse"
          class:active={isActive("/resume")}
          >Résumé</a
        >
      </li>
    </ul>
  </nav>
  <div class="hamburger-icon" id="mobilebutton">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <ul class="mobile-menu">
      <li>
        <a
          href="/web-projects"
          class="nav-links"
          class:active={isActive("/web-projects")}
          >Web Projects</a
        >
      </li>
      <li>
        <a
          href="/graphic-projects"
          class="nav-links"
          class:active={isActive("/graphic-projects")}
          >Graphic Projects</a
        >
      </li>
      <li>
        <a href="/about" class="nav-links" class:active={isActive("/about")}
          >About</a
        >
      </li>
      <li>
        <a
          href="/resume"
          class="resume-link button-pulse-black"
          class:active={isActive("/resume")}
          >Resume</a
        >
      </li>
      <li class="mobile-last">.</li>
    </ul>
  </div>
</div>
