import { projects } from "../../../lib/projects";
import { error } from "@sveltejs/kit";

export const prerender = true;

export const load = async ({ parent, params }) => {

  let data = await parent()
  let slug = params.slug

  let project = projects.find((project) => project.slug === slug)

  if (!project) {
    throw error(404, 'Project not found');
  }

  let title = `${project.title} - NatureCraft`
  let description = `Learn how to make a ${project.title} with NatureCraft. A ${project.difficulty} level project.`

  return { ...data, ...project, title, description, headline: project.title };
};
