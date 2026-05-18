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

<div
	class="font-['Outfit',sans-serif] bg-stone-50 text-stone-800 selection:bg-emerald-200 selection:text-emerald-900 overflow-hidden"
>
	<!-- Hero Section -->
	<section
		class="relative min-h-[90vh] flex items-center justify-center p-6 lg:p-12"
	>
		<!-- Background Image with Overlay -->
		<div class="absolute inset-0 z-0">
			<img
				src={data.mediaUrl}
				alt="Nature Crafting"
				class="w-full h-full object-cover"
			/>
			<!-- Gradient Overlay to ensure text readability -->
			<div
				class="absolute inset-0 bg-gradient-to-r from-stone-900/80 via-stone-900/60 to-transparent"
			></div>
		</div>

		<div
			class="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center"
		>
			<div class="w-full md:w-3/5 lg:w-1/2 space-y-8 animate-fade-in-up">
				<div
					class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-500/30 text-emerald-100 text-sm font-medium tracking-wide"
				>
					<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"
					></span>
					NatureCraft is live
				</div>

				<h1
					class="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tight"
				>
					{data.headline1}<br />
					<span
						class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-amber-200"
					>
						{data.headline2}
					</span>
				</h1>

				<p
					class="text-lg md:text-xl text-stone-200 leading-relaxed max-w-lg font-light"
				>
					{data.subheadline}
				</p>

				<div class="flex flex-col sm:flex-row gap-4 pt-4">
					<a
						href="/project"
						class="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 text-white rounded-full font-medium transition-all hover:bg-emerald-500 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] overflow-hidden"
					>
						<span class="relative z-10">{data.cta1}</span>
						<svg
							class="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 5l7 7m0 0l-7 7m7-7H3"
							/>
						</svg>
					</a>
					<a
						href="/"
						class="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-medium transition-all hover:bg-white/20 hover:scale-105"
					>
						{data.cta2}
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- App Features Section -->
	<section class="py-24 px-6 lg:px-12 bg-stone-50 relative">
		<!-- Decorative Elements -->
		<div
			class="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 translate-x-1/3 -translate-y-1/2"
		></div>
		<div
			class="absolute bottom-0 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-[128px] opacity-50 -translate-x-1/3 translate-y-1/2"
		></div>

		<div class="max-w-7xl mx-auto relative z-10">
			<div class="text-center mb-16 space-y-4">
				<h2
					class="text-4xl md:text-5xl font-bold text-stone-800 tracking-tight"
				>
					{data.sectionTitle}
				</h2>
				<p class="text-stone-500 text-lg max-w-2xl mx-auto">
					Discover the tools we built to harmonize your digital workflow with
					the natural world.
				</p>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
				<!-- Features List -->
				<div class="space-y-8 order-2 lg:order-1">
					{#each data.features as feature, index}
						<div
							class="group flex gap-6 p-6 rounded-3xl transition-all hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 border border-transparent hover:border-stone-100"
						>
							<div
								class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-110 transition-transform duration-300"
							>
								{#if feature.icon === "map-pin"}
									<svg
										class="w-7 h-7"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								{:else if feature.icon === "camera-lens"}
									<svg
										class="w-7 h-7"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
										/>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
										/>
									</svg>
								{:else if feature.icon === "users"}
									<svg
										class="w-7 h-7"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="1.5"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
								{/if}
							</div>
							<div>
								<h3
									class="text-xl font-semibold text-stone-800 mb-2 group-hover:text-emerald-700 transition-colors"
								>
									{feature.title}
								</h3>
								<p class="text-stone-500 leading-relaxed">
									{feature.description}
								</p>
							</div>
						</div>
					{/each}
				</div>

				<!-- App Preview -->
				<div
					class="order-1 lg:order-2 relative w-full max-w-md mx-auto lg:max-w-none"
				>
					<div
						class="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-amber-50 rounded-[3rem] transform rotate-3 scale-105 opacity-70 transition-transform hover:rotate-6 duration-500"
					></div>
					<img
						src={data.appPreviewImage}
						alt="App Preview"
						class="relative z-10 w-full h-auto rounded-[2.5rem] shadow-2xl border-4 border-white object-cover aspect-[9/16] lg:aspect-auto transform transition-transform hover:-translate-y-2 duration-500"
					/>
				</div>
			</div>
		</div>
	</section>

	<!-- Testimonials Section -->
	<section class="py-24 px-6 lg:px-12 bg-white">
		<div class="max-w-7xl mx-auto">
			<div class="text-center mb-16">
				<h2
					class="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight"
				>
					What Our Community Says
				</h2>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each data.communityTestimonials as testimonial}
					<div
						class="bg-stone-50 p-8 rounded-3xl border border-stone-100 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
					>
						<svg
							class="w-10 h-10 text-emerald-200 mb-6"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"
							/>
						</svg>
						<p class="text-stone-600 text-lg leading-relaxed mb-8 italic">
							"{testimonial.quote}"
						</p>
						<div class="flex items-center gap-4">
							<div
								class="w-12 h-12 rounded-full {testimonial.color} flex items-center justify-center font-bold text-lg shadow-inner"
							>
								{testimonial.avatarUrl}
							</div>
							<div>
								<div class="font-semibold text-stone-800">
									{testimonial.user}
								</div>
								<div class="text-sm text-stone-500">Verified Maker</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>

<style>
	/* Custom animations if needed, though Tailwind covers most */
	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fade-in-up {
		animation: fadeInUp 0.8s ease-out forwards;
	}
</style>
