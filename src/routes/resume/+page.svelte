<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Resume from "$lib/images/MPalmquistResume.pdf";
  import port from "$lib/images/portfolio.png";

  let currentUrl;

  $: currentUrl = $page.url.pathname;

  onMount(() => {
    if (currentUrl == "/resume") {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
  });
</script>

<svelte:head>
  <title>Résumé | Megan Palmquist</title>

  <meta
    name="description"
    content="View the résumé of Megan Palmquist, with experience in web design, front-end development, branding, and graphic design."
  />

  <!-- Open Graph / Social Sharing -->
  <meta property="og:title" content="Résumé | Megan Palmquist" />

  <meta
    property="og:description"
    content="Explore Megan Palmquist's experience in web design, front-end development, branding, and graphic design."
  />

  <meta property="og:image" content={port} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Megan Palmquist Portfolio" />
</svelte:head>

<div class="resume-wrapper">
  <div class="resume-header">
    <h1><span>Résumé</span></h1>
  </div>
  <div class="resume-pdf">
    <div class="resume-pdf-view">
      <object data={Resume} title="Resume">
        <p>
          Your web browser doesn't support this PDF. Instead, you can view my
          Resume <a
            href="https://drive.google.com/file/d/1rCCFNbGNlI2Twq2hIEN_NryIPx1DZT8I/view?usp=sharing"
            target="_blank">Here</a
          > or click the download button below.
        </p>
      </object>
    </div>
  </div>
  <div class="download">
    <a href={Resume} class="button-pulse" download>Download</a>
  </div>
</div>
