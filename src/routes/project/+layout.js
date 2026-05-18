export const prerender = true;

const contents = {
	en: {

	},
}

export const load = async ({ parent }) => {
	let data = await parent()
	let lang = data.lang

	let content = contents['en']
	if (contents[lang]) {
		content = contents[lang]
	}

	return { ...data, ...content, };
};
