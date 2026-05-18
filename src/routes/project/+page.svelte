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

<section class="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
	<div class="text-center mb-12">
		<h1
			class="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight mb-4"
		>
			{data.title}
		</h1>
		<p class="text-lg text-stone-600 max-w-2xl mx-auto">
			{data.detail1}<br />
			{data.detail2}
		</p>
	</div>

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#if data.projects}
			{#each data.projects as project}
				<div
					class="bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-200/50 flex flex-col group"
				>
					<!-- Image Container -->
					<div class="relative h-64 overflow-hidden">
						<img
							src={project.thumbnailUrl}
							alt={project.title}
							class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div
							class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-amber-700 shadow-sm"
						>
							{project.category}
						</div>
					</div>

					<!-- Content -->
					<div class="p-6 flex flex-col flex-grow">
						<div class="flex justify-between items-center mb-3">
							<span
								class="text-sm font-medium text-stone-500 flex items-center gap-1"
							>
								<svg
									class="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
									></path></svg
								>
								{project.timeToComplete}
							</span>
							<span
								class="text-xs font-semibold px-2.5 py-0.5 rounded-full {project.difficulty ===
								'Beginner'
									? 'bg-green-100 text-green-700'
									: project.difficulty === 'Intermediate'
										? 'bg-amber-100 text-amber-700'
										: 'bg-red-100 text-red-700'}"
							>
								{project.difficulty}
							</span>
						</div>

						<h3 class="text-xl font-bold text-stone-800 mb-2 leading-tight">
							{project.title}
						</h3>

						<div class="mt-2 mb-6">
							<h4
								class="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2"
							>
								Materials
							</h4>
							<ul class="flex flex-wrap gap-2">
								{#if project.materials}
									{#each project.materials as material}
										<li
											class="bg-stone-100 text-stone-600 text-xs px-2 py-1 rounded-md"
										>
											{material}
										</li>
									{/each}
								{/if}
							</ul>
						</div>

						<!-- Push button to bottom -->
						<div class="mt-auto pt-4 border-t border-stone-100">
							<a
								href="{data.pathname.endsWith('/')
									? data.pathname
									: data.pathname + '/'}{project.slug}"
								class="w-full inline-flex justify-center items-center px-4 py-3 bg-stone-800 text-amber-50 hover:bg-stone-700 rounded-xl font-medium transition-colors duration-200"
							>
								View Project Details
								<svg
									class="w-4 h-4 ml-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
									><path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 5l7 7m0 0l-7 7m7-7H3"
									></path></svg
								>
							</a>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>
