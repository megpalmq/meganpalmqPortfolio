import { error } from "@sveltejs/kit";
import {
  getGraphicProjectNavigation,
  graphicProjectsBySlug,
} from "$lib/data/graphicProjects";

export function load({ params }) {
  const project = graphicProjectsBySlug[params.slug];

  if (!project) {
    throw error(404, "Graphic project not found");
  }

  const navigation = getGraphicProjectNavigation(params.slug);

  return {
    project,
    navigation,
  };
}
