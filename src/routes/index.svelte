<script context="module" lang="ts">
	export const prerender = true;
	import Faqs from '$lib/FAQs/Faqs.svelte';
	import Consultation from '$lib/Forms/Consultation.svelte';
</script>

<svelte:head>
	<title>KraussLaw - Home</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
	<h1 class="text-teal-700 text-left text-6xl font-sans mb-4">big ole headline</h1>
	<h2 class="text-gray-800 text-left text-xl">subheadline goes here</h2>
</section>

<section class="pt-16 pb-16 bg-secondary-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4">
		<div class="content-container col-span-12 md:col-span-7 mb-8 md:mb-0 flex flex-row flex-wrap content-center">
			<div>
				<h3 class="text-gray-100 text-4xl font-sans mb-8">Secondary CTA</h3>
				<p class="text-gray-100 mb-4">normal text content goes here</p>
			</div>
		</div>

		<div class="form-container col-span-12 md:col-span-5">
			<Consultation />
		</div>
	</div>
</section>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
	<h3 class="text-secondary-800 text-4xl font-sans text-center mb-12">Frequently Asked Questions</h3>
	<Faqs />
	<p class="mt-8 mb-8">this is some content that explains the faq</p>
</section>
