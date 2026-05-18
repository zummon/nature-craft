export const prerender = true;

const contents = {
	en: {
		headline1: "Bring the",
		headline2: "Outdoors In.",
		subheadline:
			"Slow down, connect with nature, and create something beautiful. Explore our library of sustainable crafts and join a local community of makers.",
		cta1: "Start Crafting",
		cta2: "Get the App",
		mediaUrl: "https://i.postimg.cc/htWdTgxG/A-candid-naturally-lit-photograph-202605181833.jpg",
		sectionTitle: "Take Your Crafting Outside",
		features: [
			{
				id: "feat-map",
				icon: "map-pin",
				title: "Local Forager's Map",
				description: "Drop pins and discover sustainable materials in local parks and trails."
			},
			{
				id: "feat-palette",
				icon: "camera-lens",
				title: "Nature Palette Generator",
				description:
					"Snap a photo of your morning walk to instantly generate matching material colors."
			},
			{
				id: "feat-circle",
				icon: "users",
				title: "Virtual Craft Circles",
				description: "Join quiet, audio-first rooms to craft alongside others."
			}
		],
		appPreviewImage: "https://i.postimg.cc/T3yjxCx2/A-wide-angle-low-profile-photograph-of-202605181911.jpg",
		communityTestimonials: [
			{
				id: "test-1",
				user: "EarthMaker99",
				quote:
					"The camera palette tool perfectly matched the colors of the tropical flowers from my run to the yarn I needed for my latest doll project.",
				avatarUrl: "EM",
				color: "bg-emerald-100 text-emerald-700"
			},
			{
				id: "test-2",
				user: "SlowCrafter",
				quote:
					"I love the detailed material substitution lists. It makes adapting projects to my local environment so much easier.",
				avatarUrl: "SC",
				color: "bg-amber-100 text-amber-700"
			},
			{
				id: "test-3",
				user: "EcoArtist",
				quote:
					"The silent craft circles are genius! I can focus on my needle felting without any distractions.",
				avatarUrl: "EA",
				color: "bg-teal-100 text-teal-700"
			},
			{
				id: "test-4",
				user: "TerraJoi",
				quote:
					"My kids love the app! The foraging map keeps us exploring new parks every weekend.",
				avatarUrl: "TJ",
				color: "bg-rose-100 text-rose-700"
			},
		]
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
