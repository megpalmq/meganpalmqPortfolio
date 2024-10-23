<script>
  import Header from "./Header.svelte";
  import "./styles.css";
  import { onMount } from "svelte";
  import js from "jquery";

  onMount(() => {
    // MOBILE MENU
    js(".hamburger-icon").on("click", () => {
      js(".hamburger-icon").toggleClass("open");
      js("body").toggleClass("mobile-overflow");
    });

    js(".logo").on("click", () => {
      js(".hamburger-icon").removeClass("open");
    });

    // Create a single observer for each animation type
    const observerLeft = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          js(entry.target).addClass("show");
        }
      });
    });

    const observerLeftDGA = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          js(entry.target).addClass("show");
        } else {
          js(entry.target).removeClass("show");
        }
      });
    });

    const observerBottom = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          js(entry.target).addClass("showtop");
        } else {
          js(entry.target).removeClass("showtop");
        }
      });
    });

    const observerBottom2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          js(entry.target).addClass("showtop");
        }
      });
    });

    function setupObservers() {
      js(".hidden").each(function () {
        observerLeft.observe(this);
      });
      js(".hidden-about").each(function () {
        observerLeftDGA.observe(this);
      });
      js(".hiddenbottom").each(function () {
        observerBottom.observe(this);
      });
      js(".hiddenbottom2").each(function () {
        observerBottom2.observe(this);
      });
      js(".hiddenbottom3").each(function () {
        observerBottom2.observe(this);
      });
    }

    js(document).ready(function () {
      setupObservers();
      checkWindowHeight(); // Make sure this function is defined elsewhere
    });

    // Use MutationObserver instead of DOMSubtreeModified
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          setupObservers();
        }
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    function checkWindowHeight() {
      var windowHeight = js(window).height();
      var windowWidth = js(window).width();

      if (windowHeight < 822 && windowWidth < 1350 && windowWidth > 952) {
        js(".home-desc").css("margin-top", "50px");
      } else {
        js(".home-desc").css("margin-top", "0px");
      }
    }

    js(window).resize(checkWindowHeight);
  });
</script>

<div class="site-wrapper">
  <Header />
  <div class="app">
    <slot />
  </div>
</div>
