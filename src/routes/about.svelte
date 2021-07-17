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
	<title>About</title>
</svelte:head>

<div class="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
	<h1 class="text-secondary-800 text-center text-4xl font-serif my-16">About KraussLaw</h1>
	<div class="grid md:grid-cols-2 gap-8">
		<div class="order-2 md:order-1 description">
			<p class="mb-8">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget ex ligula. Aliquam nec quam
				risus. Donec cursus accumsan odio, ac pulvinar nibh auctor sit amet. Phasellus a accumsan tortor.
				Vestibulum ullamcorper faucibus vehicula. Suspendisse nec convallis nibh. Proin ac elit ipsum. Aenean
				congue iaculis varius. Aliquam et placerat metus, sit amet tincidunt lectus. Morbi nibh dolor, elementum
				ut dolor eu, rhoncus rhoncus orci.
			</p>
			<p class="mb-8">
				Duis finibus, enim a imperdiet porttitor, ante est scelerisque leo, eget dictum magna arcu mollis risus.
				Mauris cursus, nisi euismod ultrices gravida, tellus nibh rhoncus erat, a dapibus dolor purus sed augue.
				Phasellus congue tincidunt mauris, non dignissim est feugiat id. Praesent nisl nisl, porta non pretium
				nec, ullamcorper nec nulla. Aenean dapibus mattis metus, vel placerat ipsum rutrum et. Phasellus at
				porta nibh. Pellentesque accumsan convallis sagittis. Integer fringilla orci a volutpat pellentesque.
			</p>
			<h3 class="text-secondary-800 font-serif text-2xl mt-8 mb-4">Education / Experience</h3>
			<ul>
				<li>thing 1</li>
				<li>thing 2</li>
				<li>thing 3</li>
			</ul>
		</div>
		<div class="order-1 md:order-2 photo">
			<img class="full-w" src="https://via.placeholder.com/600x600/065F46/92400E" />
		</div>
	</div>
</div>
