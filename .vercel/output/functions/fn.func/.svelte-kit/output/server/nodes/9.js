import * as universal from '../entries/pages/web-projects/_slug_/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/web-projects/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/web-projects/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/9.-aBNTDCt.js","_app/immutable/chunks/index.oiCz_B55.js","_app/immutable/chunks/control.pJ1mnnAb.js","_app/immutable/chunks/webProjects.9Ip8hH4e.js","_app/immutable/chunks/DT.tuzxANWb.js","_app/immutable/chunks/scheduler.DFIcFzKk.js","_app/immutable/chunks/index.Pwu8mU7a.js","_app/immutable/chunks/each.6w4Ej4nR.js"];
export const stylesheets = ["_app/immutable/assets/9.e-NGLGpu.css"];
export const fonts = [];
