import { error } from "@sveltejs/kit";
import { getWebProjectNavigation, webProjectsBySlug } from "$lib/data/webProjects";

export function load({ params }) {
  const project = webProjectsBySlug[params.slug];

  if (!project) {
    throw error(404, "Web project not found");
  }

  const navigation = getWebProjectNavigation(params.slug);

  return {
    project,
    navigation,
  };
}
