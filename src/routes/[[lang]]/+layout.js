export const prerender = true;

const contents = {
  en: {
    title: "Nature Crafts & Mindful Making",
    description: "Discover sustainable craft tutorials, needle-felting guides, and interactive foraging maps.",
  }
}

export const load = async ({ url, params }) => {
  let pathname = url.pathname
  let lang = params.lang

  let content = contents['en']
  if (contents[lang]) {
    content = contents[lang]
  }

  return { ...content, pathname, lang };
};

