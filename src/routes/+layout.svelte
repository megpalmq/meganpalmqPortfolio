<script>
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import Header from "./Header.svelte";
  import "./styles.css";
  import { cubicOut } from "svelte/easing";
  import { onMount } from "svelte";

  let prefersReducedMotion = false;
  let lowPerformanceMode = false;
  let isRouteLeaving = false;
  let isRouteEntering = false;
  let routeEnterTimer;
  let routeMotionIn = {
    duration: 700,
    y: 34,
    scaleStart: 0.982,
    blurStart: 11,
  };
  let routeMotionOut = {
    duration: 360,
    y: -18,
    scaleStart: 1,
    blurStart: 0.8,
    fadeStart: 1,
    fadeEnd: 0,
  };

  const currentYear = new Date().getFullYear();

  function routeShift(
    node,
    {
      delay = 0,
      duration = 620,
      y = 26,
      scaleStart = 0.985,
      blurStart = 10,
      fadeStart = 0,
      fadeEnd = 1,
    } = {},
  ) {
    return {
      delay,
      duration,
      easing: cubicOut,
      css: (t) => {
        const eased = Math.max(0, Math.min(1, t));
        const translateY = (1 - eased) * y;
        const scale = scaleStart + (1 - scaleStart) * eased;
        const blur = (1 - eased) * blurStart;
        const opacity = fadeStart + (fadeEnd - fadeStart) * eased;
        const filterRule =
          blur > 0.05 ? `filter: blur(${blur}px);` : "filter: none;";

        return `transform: translate3d(0, ${translateY}px, 0) scale(${scale}); ${filterRule} opacity: ${opacity};`;
      },
    };
  }

  beforeNavigate(() => {
    if (prefersReducedMotion) {
      return;
    }

    isRouteLeaving = true;
    isRouteEntering = false;

    clearTimeout(routeEnterTimer);
  });

  afterNavigate(() => {
    if (prefersReducedMotion) {
      return;
    }

    isRouteLeaving = false;
    isRouteEntering = true;

    clearTimeout(routeEnterTimer);
    routeEnterTimer = setTimeout(() => {
      isRouteEntering = false;
    }, 620);
  });

  let activeMotion = {
    depthTilt: 4.8,
    depthLift: 22,
    mediaBaseScale: 1.02,
    mediaScaleRange: 0.028,
    maskStart: 0.9,
    maskEnd: 0.28,
  };

  onMount(() => {
    const connection =
      navigator.connection ||
      navigator.mozConnection ||
      navigator.webkitConnection;
    const saveData = Boolean(connection && connection.saveData);
    const deviceMemory = Number(navigator.deviceMemory || 0);
    const hardwareThreads = Number(navigator.hardwareConcurrency || 0);

    lowPerformanceMode =
      saveData ||
      (deviceMemory > 0 && deviceMemory <= 4) ||
      (hardwareThreads > 0 && hardwareThreads <= 4);

    prefersReducedMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      lowPerformanceMode;

    if (lowPerformanceMode) {
      document.body.classList.add("performance-mode");
      activeMotion = {
        depthTilt: 0,
        depthLift: 0,
        mediaBaseScale: 1,
        mediaScaleRange: 0,
        maskStart: 0.86,
        maskEnd: 0.36,
      };
      routeMotionIn = {
        duration: 360,
        y: 16,
        scaleStart: 0.995,
        blurStart: 0,
      };
      routeMotionOut = {
        duration: 220,
        y: -8,
        scaleStart: 1,
        blurStart: 0,
        fadeStart: 1,
        fadeEnd: 0,
      };
    } else {
      document.body.classList.remove("performance-mode");
    }

    const q = (selector, root = document) =>
      Array.from(root.querySelectorAll(selector));
    const forEach = (selector, callback, root = document) => {
      q(selector, root).forEach(callback);
    };

    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const logo = document.querySelector(".logo");
    const mobileMenuLinks = q(".mobile-menu a");

    function toggleMobileMenu(event) {
      // Ignore clicks inside the expanded menu so links can navigate normally.
      if (
        event?.target instanceof Element &&
        event.target.closest(".mobile-menu")
      ) {
        return;
      }

      hamburgerIcon?.classList.toggle("open");
      document.body.classList.toggle("mobile-overflow");
    }

    function closeMobileMenu() {
      hamburgerIcon?.classList.remove("open");
      document.body.classList.remove("mobile-overflow");
    }

    // MOBILE MENU
    hamburgerIcon?.addEventListener("click", toggleMobileMenu);
    logo?.addEventListener("click", closeMobileMenu);
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", closeMobileMenu);
    });

    // Create a single observer for each animation type
    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    const observerLeftDGA = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const observerBottom = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showtop");
        } else {
          entry.target.classList.remove("showtop");
        }
      });
    });

    const observerBottom2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showtop");
        }
      });
    });

    const observerDepth = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("depth-active");
          }
        });
      },
      { threshold: 0.2 },
    );

    const observedLeft = new WeakSet();
    const observedAbout = new WeakSet();
    const observedBottom = new WeakSet();
    const observedBottomOnce = new WeakSet();
    const observedDepth = new WeakSet();

    function setupObservers() {
      q(".project-box, .hub-card").forEach((el, index) => {
        el.style.transitionDelay = `${Math.min(index * 55, 300)}ms`;
      });

      forEach(".hidden", (el) => {
        if (!observedLeft.has(el)) {
          observerLeft.observe(el);
          observedLeft.add(el);
        }
      });

      forEach(".hidden-about", (el) => {
        if (!observedAbout.has(el)) {
          observerLeftDGA.observe(el);
          observedAbout.add(el);
        }
      });

      forEach(".hiddenbottom", (el) => {
        if (!observedBottom.has(el)) {
          observerBottom.observe(el);
          observedBottom.add(el);
        }
      });

      forEach(".hiddenbottom2", (el) => {
        if (!observedBottomOnce.has(el)) {
          observerBottom2.observe(el);
          observedBottomOnce.add(el);
        }
      });

      forEach(".hiddenbottom3", (el) => {
        if (!observedBottomOnce.has(el)) {
          observerBottom2.observe(el);
          observedBottomOnce.add(el);
        }
      });

      forEach(".project-box, .hub-card", (el) => {
        if (!observedDepth.has(el)) {
          observerDepth.observe(el);
          observedDepth.add(el);
        }
      });
    }

    let ticking = false;
    const parallaxEls = [];
    const depthEls = [];
    const maskEls = [];

    function updateScrollAnimationState() {
      const viewportHeight = window.innerHeight || 1;

      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) {
          return;
        }

        const speed = Number(el.getAttribute("data-parallax") || 0.12);
        const distanceFromCenter =
          rect.top + rect.height * 0.5 - viewportHeight * 0.5;
        const y = distanceFromCenter * speed * -1;
        el.style.setProperty("--parallax-shift", `${y.toFixed(2)}px`);
      });

      depthEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) {
          return;
        }

        const cardCenter = rect.top + rect.height * 0.5;
        const normalized = (cardCenter - viewportHeight * 0.5) / viewportHeight;
        const clamp = Math.max(-0.9, Math.min(0.9, normalized));
        el.style.setProperty(
          "--depth-tilt",
          `${(-clamp * activeMotion.depthTilt).toFixed(2)}deg`,
        );
        el.style.setProperty(
          "--depth-lift",
          `${(Math.abs(clamp) * -activeMotion.depthLift).toFixed(2)}px`,
        );

        const media = el.querySelector("img");
        if (media) {
          const mediaScale =
            activeMotion.mediaBaseScale -
            Math.abs(clamp) * activeMotion.mediaScaleRange;
          media.style.setProperty("--media-scale", `${mediaScale.toFixed(3)}`);
        }
      });

      maskEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -200 || rect.top > viewportHeight + 200) {
          return;
        }

        const start = viewportHeight * activeMotion.maskStart;
        const end = viewportHeight * activeMotion.maskEnd;
        const progress = (start - rect.top) / (start - end);
        const clamped = Math.max(0, Math.min(1, progress));
        const eased = 1 - Math.pow(1 - clamped, 2);
        el.style.setProperty("--mask-progress", eased.toFixed(3));
      });

      ticking = false;
    }

    function onScrollAnimate() {
      if (prefersReducedMotion) {
        return;
      }

      if (!ticking) {
        window.requestAnimationFrame(updateScrollAnimationState);
        ticking = true;
      }
    }

    function setupScrollAnimations() {
      if (prefersReducedMotion) {
        return;
      }

      parallaxEls.length = 0;
      depthEls.length = 0;
      maskEls.length = 0;

      parallaxEls.push(...q("[data-parallax]"));
      depthEls.push(...q(".project-box, .hub-card"));
      maskEls.push(...q("[data-mask-reveal]"));

      updateScrollAnimationState();
    }

    setupObservers();
    setupScrollAnimations();
    checkWindowHeight();

    let mutationScheduled = false;
    const relevantSelectors = [
      ".hidden",
      ".hidden-about",
      ".hiddenbottom",
      ".hiddenbottom2",
      ".hiddenbottom3",
      ".project-box",
      ".hub-card",
      "[data-parallax]",
      "[data-mask-reveal]",
    ];

    function hasRelevantNode(nodes) {
      return Array.from(nodes).some((node) => {
        if (!(node instanceof Element)) {
          return false;
        }

        if (relevantSelectors.some((selector) => node.matches(selector))) {
          return true;
        }

        return relevantSelectors.some((selector) =>
          node.querySelector(selector),
        );
      });
    }

    function scheduleRefresh() {
      if (mutationScheduled) {
        return;
      }

      mutationScheduled = true;
      requestAnimationFrame(() => {
        setupObservers();
        setupScrollAnimations();
        mutationScheduled = false;
      });
    }

    let mutationObserver;
    if (!prefersReducedMotion) {
      // Watch for dynamic content insertions and refresh observer bindings once per frame.
      mutationObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === "childList" &&
            hasRelevantNode(mutation.addedNodes)
          ) {
            scheduleRefresh();
          }
        });
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    function checkWindowHeight() {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;
      const homeDesc = document.querySelector(".home-desc");

      if (windowHeight < 822 && windowWidth < 1350 && windowWidth > 952) {
        if (homeDesc) {
          homeDesc.style.marginTop = "50px";
        }
      } else {
        if (homeDesc) {
          homeDesc.style.marginTop = "0px";
        }
      }
    }

    window.addEventListener("resize", checkWindowHeight);
    window.addEventListener("scroll", onScrollAnimate, { passive: true });
    window.addEventListener("resize", onScrollAnimate);

    return () => {
      clearTimeout(routeEnterTimer);
      hamburgerIcon?.removeEventListener("click", toggleMobileMenu);
      logo?.removeEventListener("click", closeMobileMenu);
      mobileMenuLinks.forEach((link) => {
        link.removeEventListener("click", closeMobileMenu);
      });
      mutationObserver?.disconnect();
      observerLeft.disconnect();
      observerLeftDGA.disconnect();
      observerBottom.disconnect();
      observerBottom2.disconnect();
      observerDepth.disconnect();
      closeMobileMenu();
      document.body.classList.remove("performance-mode");
      window.removeEventListener("scroll", onScrollAnimate);
      window.removeEventListener("resize", onScrollAnimate);
      window.removeEventListener("resize", checkWindowHeight);
    };
  });
</script>

<div class="site-wrapper">
  <Header />
  <div
    class="app {isRouteLeaving ? 'is-route-leaving' : ''} {isRouteEntering
      ? 'is-route-entering'
      : ''}"
  >
    {#key $page.url.pathname}
      <div
        class="route-stage"
        in:routeShift={routeMotionIn}
        out:routeShift={routeMotionOut}
      >
        <slot />
      </div>
    {/key}
  </div>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__content">
        <div>
          <p class="site-footer__title">Megan Palmquist</p>
          <div class="site-footer__title"></div>
          <p class="site-footer__copy">
            {currentYear} · Front-end development and visual design.
          </p>
          <div class="site-footer__links" aria-label="Footer links">
            <a href="/about">About</a>
            <span>|</span>
            <a href="/web-projects">Web Projects</a>
            <span>|</span>
            <a href="/graphic-projects">Graphic Projects</a>
            <span>|</span>
            <a
              href="https://www.linkedin.com/in/megan-palmquist/"
              target="_blank"
              rel="noopener noreferrer">LinkedIn</a
            >
            <span>|</span>
            <a
              href="https://github.com/megpalmq"
              target="_blank"
              rel="noopener noreferrer">GitHub</a
            >
            <span>|</span>
            <a
              href="https://www.instagram.com/megannstone_/"
              target="_blank"
              rel="noopener noreferrer">Instagram</a
            >
          </div>
        </div>
        <a href="mailto:mspstudios7@gmail.com" class="site-footer__email-btn"
          >Let's Talk</a
        >
      </div>
    </div>
  </footer>
</div>
