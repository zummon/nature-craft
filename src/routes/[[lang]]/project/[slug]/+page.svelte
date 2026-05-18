<script>
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="description" content={data.description} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	<meta name="twitter:title" content={data.title} />
	<meta name="twitter:description" content={data.description} />
</svelte:head>

<main class="bg-stone-50 min-h-[calc(100vh-64px)] pb-16">
	<!-- Back link & Breadcrumb -->
	<div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
		<a
			href="/project"
			class="inline-flex items-center text-sm font-medium text-stone-500 hover:text-amber-700 transition-colors group"
		>
			<svg
				class="w-4 h-4 mr-1 transition-transform group-hover:-translate-x-1"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				></path></svg
			>
			Back to Projects
		</a>
	</div>

	<!-- Hero Section -->
	<article class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
		<div
			class="bg-white rounded-3xl overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100"
		>
			<!-- Image Header -->
			<div class="relative h-80 md:h-[450px] w-full">
				<img
					src={data.thumbnailUrl}
					alt={data.headline}
					class="absolute inset-0 w-full h-full object-cover"
				/>
				<!-- Gradient Overlay -->
				<div
					class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/30 to-transparent"
				></div>

				<!-- Header Content (Bottom Left) -->
				<div class="absolute bottom-0 left-0 p-6 md:p-10 w-full">
					<div class="flex flex-wrap items-center gap-3 mb-4">
						<span
							class="px-3 py-1.5 bg-amber-500/95 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm"
						>
							{data.category}
						</span>
						<span
							class="px-3 py-1.5 bg-stone-100/95 backdrop-blur-sm text-stone-800 text-xs font-semibold rounded-full shadow-sm flex items-center gap-1.5"
						>
							<svg
								class="w-3.5 h-3.5"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path></svg
							>
							{data.timeToComplete}
						</span>
						<span
							class="px-3 py-1.5 {data.difficulty === 'Beginner'
								? 'bg-green-100/95 text-green-800'
								: data.difficulty === 'Intermediate'
									? 'bg-amber-100/95 text-amber-800'
									: 'bg-red-100/95 text-red-800'} backdrop-blur-sm text-xs font-semibold rounded-full shadow-sm"
						>
							{data.difficulty}
						</span>
					</div>
					<h1
						class="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md mb-2"
					>
						{data.headline}
					</h1>
				</div>
			</div>

			<!-- Project Details Body -->
			<div class="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-12">
				<!-- Left Column: Materials & Details -->
				<div class="md:col-span-1 space-y-8">
					<!-- Materials Box -->
					<div
						class="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 shadow-sm"
					>
						<h3
							class="text-lg font-bold text-stone-800 mb-5 flex items-center gap-2"
						>
							<svg
								class="w-5 h-5 text-amber-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
								></path></svg
							>
							Materials Needed
						</h3>
						<ul class="space-y-4">
							{#each data.materials as material}
								<li class="flex items-start gap-3">
									<div
										class="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 border border-amber-200"
									>
										<svg
											class="w-3.5 h-3.5 text-amber-700"
											fill="currentColor"
											viewBox="0 0 20 20"
											><path
												fill-rule="evenodd"
												d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
												clip-rule="evenodd"
											></path></svg
										>
									</div>
									<span
										class="text-sm text-stone-700 font-medium leading-relaxed"
										>{material}</span
									>
								</li>
							{/each}
						</ul>
					</div>

					<!-- Share Project -->
					<div>
						<h3
							class="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-4"
						>
							Share Project
						</h3>
						<div class="flex gap-3">
							<button
								class="w-11 h-11 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:text-stone-800 hover:border-stone-300 transition-all"
							>
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"
									><path
										d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
									/></svg
								>
							</button>
							<button
								class="w-11 h-11 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-stone-500 hover:bg-stone-50 hover:text-stone-800 hover:border-stone-300 transition-all"
							>
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"
									><path
										d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
									/></svg
								>
							</button>
						</div>
					</div>
				</div>

				<!-- Right Column: Instructions / Overview -->
				<div class="md:col-span-2">
					<h2 class="text-2xl font-bold text-stone-800 mb-6 tracking-tight">
						Project Overview
					</h2>
					<div class="prose prose-stone max-w-none text-stone-600 space-y-6">
						<p class="text-lg leading-relaxed text-stone-700">
							Welcome to the <strong>{data.headline}</strong> guide. This {data.category.toLowerCase()}
							craft is perfect for anyone looking to connect with nature and create
							something beautiful with their hands.
						</p>
						<p class="leading-relaxed">
							Gather your materials and find a quiet, comfortable space. Take a
							moment to appreciate the textures and colors of the natural
							elements you've collected. This project takes approximately {data.timeToComplete}
							to finish, making it an ideal weekend activity to unwind and relax.
						</p>

						<div
							class="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-2xl mt-8 shadow-sm"
						>
							<h4 class="font-bold text-amber-900 flex items-center gap-2 mb-2">
								<svg
									class="w-5 h-5 text-amber-600"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path></svg
								>
								Crafter's Tip
							</h4>
							<p class="text-amber-800 text-sm m-0 leading-relaxed">
								For the best results, ensure your materials are completely dry
								before you begin. If you're foraging outdoors, always practice
								sustainable harvesting by taking only what you need.
							</p>
						</div>

						<h3
							class="text-xl font-bold text-stone-800 mt-10 mb-5 tracking-tight"
						>
							Step-by-Step Instructions
						</h3>
						<div
							class="flex flex-col items-center justify-center p-14 border-2 border-dashed border-stone-200 rounded-3xl bg-stone-50/50"
						>
							<div
								class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 mb-4 text-stone-400"
							>
								<svg
									class="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
									></path></svg
								>
							</div>
							<p class="text-stone-500 text-center font-medium">
								Detailed instructions for this project are being crafted.<br />
								Check back later or join our community to see how others are making
								this!
							</p>
						</div>
					</div>

					<div
						class="mt-12 flex flex-col sm:flex-row items-center gap-4 border-t border-stone-100 pt-8"
					>
						<button
							class="w-full sm:w-auto flex-1 bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 hover:border-stone-300 py-3.5 px-6 rounded-xl font-semibold shadow-sm transition-all duration-200 flex justify-center items-center gap-2"
						>
							<svg
								class="w-5 h-5 text-amber-500"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								></path></svg
							>
							Save for Later
						</button>
						<button
							class="w-full sm:w-auto flex-1 bg-amber-600 text-white hover:bg-amber-500 py-3.5 px-6 rounded-xl font-semibold shadow-md shadow-amber-900/10 transition-all duration-200"
						>
							Mark as Completed
						</button>
					</div>
				</div>
			</div>
		</div>
	</article>
</main>
