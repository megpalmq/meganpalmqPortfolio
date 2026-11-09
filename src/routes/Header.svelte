<script>
  import { page } from "$app/stores";

  function normalizePath(path) {
    return path.replace(/\/+$/, "") || "/";
  }

  $: currentRoute = normalizePath($page.url.pathname);

  function isActive(path, route) {
    const normalizedPath = normalizePath(path);

    // Exact match for the main page
    if (route === normalizedPath) {
      return true;
    }

    // Keep the parent nav item active on its project detail pages
    if (path !== "/" && route.startsWith(`${normalizedPath}/`)) {
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
          href="/web-projects"
          class="nav-links"
          class:active={isActive("/web-projects", currentRoute)}
          aria-current={isActive("/web-projects", currentRoute) ? "page" : undefined}
        >
          Web Projects
        </a>
      </li>
      <li>
        <a
          href="/graphic-projects"
          class="nav-links"
          class:active={isActive("/graphic-projects", currentRoute)}
          aria-current={isActive("/graphic-projects", currentRoute) ? "page" : undefined}
        >
          Graphic Design Projects
        </a>
      </li>
      <li>
        <a
          href="/about"
          class="nav-links"
          class:active={isActive("/about", currentRoute)}
          aria-current={isActive("/about", currentRoute) ? "page" : undefined}
        >
          About
        </a>
      </li>
      <li>
        <a
          href="/resume"
          class="resume-link button-pulse"
          class:active={isActive("/resume", currentRoute)}
          aria-current={isActive("/resume", currentRoute) ? "page" : undefined}>Résumé</a
        >
      </li>
    </ul>
  </nav>
  <div class="hamburger-icon" id="mobilebutton">
    <div class="bar1"></div>
    <div class="bar2"></div>
    <div class="bar3"></div>
    <ul class="mobile-menu">
      <li class:active-item={isActive("/web-projects", currentRoute)}>
        <a
          href="/web-projects"
          class="nav-links"
          class:active={isActive("/web-projects", currentRoute)}
          aria-current={isActive("/web-projects", currentRoute) ? "page" : undefined}>Web Projects</a
        >
      </li>
      <li class:active-item={isActive("/graphic-projects", currentRoute)}>
        <a
          href="/graphic-projects"
          class="nav-links"
          class:active={isActive("/graphic-projects", currentRoute)}
          aria-current={isActive("/graphic-projects", currentRoute) ? "page" : undefined}>Graphic Projects</a
        >
      </li>
      <li class:active-item={isActive("/about", currentRoute)}>
        <a
          href="/about"
          class="nav-links"
          class:active={isActive("/about", currentRoute)}
          aria-current={isActive("/about", currentRoute) ? "page" : undefined}
          >About</a
        >
      </li>
      <li class:active-item={isActive("/resume", currentRoute)}>
        <a
          href="/resume"
          class="resume-link button-pulse-black"
          class:active={isActive("/resume", currentRoute)}
          aria-current={isActive("/resume", currentRoute) ? "page" : undefined}>Resume</a
        >
      </li>
      <li class="mobile-last">.</li>
    </ul>
  </div>
</div>
<div id="top"></div>
