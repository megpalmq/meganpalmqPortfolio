<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  $: currentPath = $page.url.pathname.replace(/\/+$/, "") || "/";

  function isActive(path) {
    const normalizedPath = `${base}${path}`.replace(/\/+$/, "") || "/";

    // Exact match for the main page
    if (currentPath === normalizedPath) {
      return true;
    }

    // Keep the parent nav item active on its project detail pages
    if (path !== "/" && currentPath.startsWith(`${normalizedPath}/`)) {
      return true;
    }

    return false;
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
          href={`${base}/web-projects`}
          class="nav-links"
          class:active={isActive("/web-projects")}
        >
          Web Projects
        </a>
      </li>
      <li>
        <a
          href={`${base}/graphic-projects`}
          class="nav-links"
          class:active={isActive("/graphic-projects")}
        >
          Graphic Design Projects
        </a>
      </li>
      <li>
        <a
          href={`${base}/about`}
          class="nav-links"
          class:active={isActive("/about")}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/resume"
          class="resume-link button-pulse"
          class:active={isActive("/resume")}>Résumé</a
        >
      </li>
    </ul>
  </nav>
  <div class="hamburger-icon" id="mobilebutton">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <ul class="mobile-menu">
      <li class:active-item={isActive("/web-projects")}>
        <a
          href="/web-projects"
          class="nav-links"
          class:active={isActive("/web-projects")}>Web Projects</a
        >
      </li>
      <li class:active-item={isActive("/graphic-projects")}>
        <a
          href="/graphic-projects"
          class="nav-links"
          class:active={isActive("/graphic-projects")}>Graphic Projects</a
        >
      </li>
      <li class:active-item={isActive("/about")}>
        <a href="/about" class="nav-links" class:active={isActive("/about")}
          >About</a
        >
      </li>
      <li class:active-item={isActive("/resume")}>
        <a
          href="/resume"
          class="resume-link button-pulse-black"
          class:active={isActive("/resume")}>Resume</a
        >
      </li>
      <li class="mobile-last">.</li>
    </ul>
  </div>
</div>
<div id="top"></div>
