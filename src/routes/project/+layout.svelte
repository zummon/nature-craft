<script>
  let { data, children } = $props();
</script>

<nav
  class="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-stone-200/50 shadow-sm"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="flex-shrink-0 flex items-center gap-2 group">
        <div
          class="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/20 group-hover:scale-105 transition-transform"
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
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
        </div>
        <span
          class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-900 tracking-wide"
        >
          NatureCraft
        </span>
      </a>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8">
        <a
          href="/"
          class="text-stone-500 hover:text-amber-700 font-medium transition-colors"
          >Home</a
        >
        <a
          href="/project"
          class="text-amber-700 font-semibold border-b-2 border-amber-500 py-1 transition-colors"
          >Projects</a
        >
        <a
          href="/"
          class="text-stone-500 hover:text-amber-700 font-medium transition-colors"
          >Our Story</a
        >
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button
          class="text-stone-500 hover:text-amber-700 focus:outline-none"
          title=""
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

{@render children()}
