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

<script>
	import { onMount } from 'svelte';
	import Consultation from '$lib/Forms/Consultation.svelte';
	import Location from '$lib/Maps/Location.svelte';
	let error;
	let ready;
	let gmaps;
	onMount(() => {
		if (typeof window.google === 'undefined') {
			gmaps = document.createElement('script');
			gmaps.setAttribute(
				'src',
				'https://maps.googleapis.com/maps/api/js?key=AIzaSyDDpO6BkB3LzPyzw4CpOnIyGZiz3xd6I_M&callback=initMap&libraries=&v=weekly'
			);
			document.body.appendChild(gmaps);
		} else {
			ready = true;
		}
		window.initMap = () => {
			ready = true;
		};
	});
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<div class="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h1 class="text-secondary-800 text-center text-4xl font-serif my-16">Contact</h1>
	<div class="grid md:grid-cols-2 gap-4 mt-16">
		<div class="order-2 md:order-1 my-4">
			<p>
				test address<br />
				1234 N. test address drive<br />
				tucson, arizona 12345<br />
				p: <a href="tel:123.123.1234">123.123.1234</a><br />
				f: <a href="fax:321.321.4321">321.321.4321</a>
			</p>
			{#if ready}
				<Location />
			{/if}
		</div>
		<Consultation />
	</div>
</div>
