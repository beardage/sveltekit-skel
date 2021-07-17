<script lang="ts">
	import { page } from '$app/stores';

	let mobileNavOpen = false;

	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}
</script>

<header>
	<nav class="">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 flex-grow flex-col">
				<div class="flex flex-between justify-between pt-5 pb-5 border-b border-primary-900 relative">
					<div class="flex-shrink-0 flex items-center text-primary-700 font-serif text-2xl">
						<a sveltekit:prefetch href="/">KraussLaw</a>
					</div>
					<div class="hidden flex-grow sm:ml-8 md:flex md:space-x-8 uppercase content-end justify-end">
						<a
							sveltekit:prefetch
							href="/"
							class="text-secondary-800 inline-flex items-center px-1 pt-1 text-sm font-semibold"
						>
							Home
						</a>
						<a
							sveltekit:prefetch
							href="/about/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							About
						</a>
						<a
							sveltekit:prefetch
							href="/practice-areas/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							Practice Areas
						</a>
						<a
							sveltekit:prefetch
							href="/faq/"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							FAQs
						</a>
						<a
							sveltekit:prefetch
							href="/contact"
							class="border-transparent text-secondary-800 hover:text-secondary-600 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
						>
							Contact
						</a>
					</div>
					<button
						type="button"
						id="mobileNavToggle"
						class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-800 hover:text-secondary-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-700"
						aria-controls="mobile-menu"
						aria-expanded="false"
						on:click={toggleMobileNav}
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="block h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
						<svg
							class="hidden h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>

		<div class:nav-visible={mobileNavOpen} class:hidden={!mobileNavOpen} id="mobile-menu">
			<div class="absolute right-4 z-50 space-y-1 bg-primary-800 border-primary-600">
				<a
					sveltekit:prefetch
					href="/"
					class="uppercase text-gray-100 hover:bg-primary-700 block pl-3 pr-4 py-2 text-base font-medium"
					on:click={toggleMobileNav}>Home</a
				>
				<a
					sveltekit:prefetch
					href="/about/"
					class="uppercase border-transparent text-gray-100 hover:bg-primary-700 block pl-3 pr-4 py-2 text-base font-medium"
					on:click={toggleMobileNav}>About</a
				>
				<a
					sveltekit:prefetch
					href="/practice-areas/"
					class="uppercase border-transparent text-gray-100 hover:bg-primary-700 block pl-3 pr-4 py-2 text-base font-medium"
					on:click={toggleMobileNav}>Practice Areas</a
				>
				<a
					sveltekit:prefetch
					href="/faq/"
					class="uppercase border-transparent text-gray-100 hover:bg-primary-700 block pl-3 pr-4 py-2 text-base font-medium"
					on:click={toggleMobileNav}>FAQs</a
				>
				<a
					sveltekit:prefetch
					href="/contact/"
					class="uppercase border-transparent text-gray-100 hover:bg-primary-700 block pl-3 pr-4 py-2 text-base font-medium"
					on:click={toggleMobileNav}>Contact</a
				>
			</div>
		</div>
	</nav>
</header>
