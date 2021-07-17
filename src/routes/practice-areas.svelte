<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
</script>

<svelte:head>
	<title>Practice Areas</title>
</svelte:head>

<div class="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h1 class="text-secondary-800 text-center text-4xl font-serif my-16">Practice Areas</h1>
</div>
