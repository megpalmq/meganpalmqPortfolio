<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Resume from "$lib/images/RESUME.pdf";
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
  <title>Resume</title>
  <meta name="description" content="My resume" />
  <meta property="og:image" content={port} />
</svelte:head>

<div class="resume-wrapper">
  <div class="resume-header">
    <h1><span>Resume</span></h1>
  </div>
  <div class="resume-pdf">
    <div class="resume-pdf-view">
      <object data={Resume} title="Resume">
        <p>
          Your web browser doesn't support this PDF. Instead, you can view my
          Resume <a
            href="https://drive.google.com/file/d/1Bd1CbvA5_lPUaEXqu6CtKGWyj0QTlLf3/view?usp=sharing"
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
