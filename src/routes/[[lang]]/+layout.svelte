<script>
	import "../../app.css";

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen flex flex-col">
	<main class="flex-grow">
		{@render children()}
	</main>

	<footer class="bg-stone-900 text-stone-300 border-t border-stone-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
				<!-- Brand & Description -->
				<div class="col-span-1 md:col-span-1 lg:col-span-2">
					<a href="/" class="flex items-center gap-2 mb-4 group">
						<div
							class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/50 group-hover:scale-105 transition-transform"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="white"
								stroke-width="2.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path d="M12 2v20"></path>
								<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
								></path>
							</svg>
						</div>
						<span
							class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-500 tracking-wide"
						>
							NatureCraft
						</span>
					</a>
					<p class="text-stone-400 text-sm leading-relaxed max-w-sm">
						Made by Ai, <a
							class="text-amber-400 underline"
							target="_blank"
							href="https://github.com/zummon"
						>
							Teerapat Anantarattanachai
						</a>
						<br />
						Something breaks, needs upgrade. Let me know
					</p>
					<div class="flex gap-4 mt-6">
						<a
							href="/"
							class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border border-stone-700/50"
							title=""
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path
									d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
								></path></svg
							>
						</a>
						<a
							href="/"
							class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border border-stone-700/50"
							title=""
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><rect width="20" height="20" x="2" y="2" rx="5" ry="5"
								></rect><path
									d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
								></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"
								></line></svg
							>
						</a>
						<a
							href="/"
							class="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-amber-500/20 hover:text-amber-400 transition-colors border border-stone-700/50"
							title=""
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								><path
									d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
								></path></svg
							>
						</a>
					</div>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-white font-semibold mb-4 tracking-wide">Explore</h3>
					<ul class="space-y-3">
						<li>
							<a
								href="/"
								class="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
								><span class="w-1 h-1 rounded-full bg-amber-500/50"></span> Catalog</a
							>
						</li>
						<li>
							<a
								href="/project"
								class="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
								><span class="w-1 h-1 rounded-full bg-amber-500/50"></span> Projects</a
							>
						</li>
						<li>
							<a
								href="/"
								class="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
								><span class="w-1 h-1 rounded-full bg-amber-500/50"></span> Our Story</a
							>
						</li>
						<li>
							<a
								href="/"
								class="text-stone-400 hover:text-amber-400 transition-colors text-sm flex items-center gap-2"
								><span class="w-1 h-1 rounded-full bg-amber-500/50"></span> Crafting
								Blog</a
							>
						</li>
					</ul>
				</div>

				<!-- Newsletter -->
				<div>
					<h3 class="text-white font-semibold mb-4 tracking-wide">
						Stay Inspired
					</h3>
					<p class="text-stone-400 text-sm mb-4">
						Subscribe for eco-crafting tips and new material alerts.
					</p>
					<form class="space-y-2">
						<div class="relative">
							<input
								type="email"
								placeholder="Your email address"
								class="w-full bg-stone-800 border border-stone-700 rounded-lg py-2.5 px-4 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
								required
							/>
						</div>
						<button
							type="submit"
							disabled
							class="w-full bg-amber-600 hover:bg-amber-500 text-white font-medium py-2.5 rounded-lg text-sm transition-colors shadow-lg shadow-amber-900/20"
						>
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<!-- Bottom Bar -->
			<div
				class="pt-8 mt-8 border-t border-stone-800/80 flex flex-col md:flex-row justify-between items-center gap-4"
			>
				<p class="text-stone-500 text-sm">
					&copy; {new Date().getFullYear()} NatureCraft. All rights reserved.
				</p>
				<div class="flex gap-6 text-sm">
					<a
						href="/"
						class="text-stone-500 hover:text-stone-300 transition-colors"
						>Privacy Policy</a
					>
					<a
						href="/"
						class="text-stone-500 hover:text-stone-300 transition-colors"
						>Terms of Service</a
					>
				</div>
			</div>
		</div>
	</footer>
</div>
