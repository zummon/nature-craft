import { projects } from '../../../lib/projects';

export const prerender = true;

const contents = {
  en: {
    title: "NatureCraft Projects",
    description: "Explore our nature-based craft projects.",
    detail1: "Discover hand-picked eco-friendly and nature-inspired crafting projects.",
    detail2: "Dive into our catalog and let your creativity bloom.",
  }
}

export const load = async ({ parent, params }) => {
  let data = await parent()
  let lang = data.lang

  let content = contents['en']
  if (contents[lang]) {
    content = contents[lang]
  }

  return { ...data, ...content, projects: projects };
};
