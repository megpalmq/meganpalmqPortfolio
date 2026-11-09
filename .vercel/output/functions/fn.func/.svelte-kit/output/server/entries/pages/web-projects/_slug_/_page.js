import { e as error } from "../../../../chunks/index.js";
import { a as webProjectsBySlug, g as getWebProjectNavigation } from "../../../../chunks/webProjects.js";
function load({ params }) {
  const project = webProjectsBySlug[params.slug];
  if (!project) {
    throw error(404, "Web project not found");
  }
  const navigation = getWebProjectNavigation(params.slug);
  return {
    project,
    navigation
  };
}
export {
  load
};
