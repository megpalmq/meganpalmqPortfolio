import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { p as port } from "../../../chunks/portfolio.js";
const Resume = "/_app/immutable/assets/MPalmquistResume.apilTGXR.pdf";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.pathname;
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1qxjzrt_START -->${$$result.title = `<title>Résumé | Megan Palmquist</title>`, ""}<meta name="description" content="View the résumé of Megan Palmquist, with experience in web design, front-end development, branding, and graphic design."><meta property="og:title" content="Résumé | Megan Palmquist"><meta property="og:description" content="Explore Megan Palmquist's experience in web design, front-end development, branding, and graphic design."><meta property="og:image"${add_attribute("content", port, 0)}><meta property="og:type" content="website"><meta property="og:site_name" content="Megan Palmquist Portfolio"><!-- HEAD_svelte-1qxjzrt_END -->`, ""} <div class="resume-wrapper" data-svelte-h="svelte-cb1h9"><div class="resume-header"><h1><span>Résumé</span></h1></div> <div class="resume-pdf"><div class="resume-pdf-view"><object${add_attribute("data", Resume, 0)} title="Resume"><p>Your web browser doesn&#39;t support this PDF. Instead, you can view my
          Resume <a href="https://drive.google.com/file/d/1rCCFNbGNlI2Twq2hIEN_NryIPx1DZT8I/view?usp=sharing" target="_blank">Here</a> or click the download button below.</p></object></div></div> <div class="download"><a${add_attribute("href", Resume, 0)} class="button-pulse" download>Download</a></div></div>`;
});
export {
  Page as default
};
