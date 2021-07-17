<script context="module" lang="ts">
	export const prerender = true;
	import Faqs from '$lib/FAQs/Faqs.svelte';
	import Consultation from '$lib/Forms/Consultation.svelte';
</script>

<svelte:head>
	<title>KraussLaw - Home</title>
</svelte:head>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
	<h1 class="text-teal-700 text-left text-6xl font-serif mb-4">Heidi Krauss is beating the fuck out of your case.</h1>
	<h2 class="text-gray-800 text-left text-xl">If you made a mistake, I'll help you get your life back on track.</h2>
</section>

<section class="pt-16 pb-16 bg-secondary-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-4">
		<div class="content-container col-span-12 md:col-span-7 mb-8 md:mb-0 flex flex-row flex-wrap content-center">
			<div>
				<h3 class="text-gray-100 text-4xl font-serif mb-8">Tucson Criminal Defense Attorney With Conviction</h3>
				<p class="text-gray-100 mb-4">
					Representing clients all across the State of Arizona, but based in Tucson.
				</p>
				<p class="text-gray-100 mb-4">Specializing in these practice areas:</p>
				<ul class="text-gray-100 mb-4 list-disc list-inside">
					<li>Gun Charges</li>
					<li>Cyber Crimes</li>
					<li>Murder and Homicide</li>
					<li>Drug Crimes</li>
					<li>Sex Offenses</li>
					<li>Violent Crimes</li>
				</ul>
				<p>
					<a class="text-secondary-200" href="/practice-areas/"
						>Read More about these areas of practice here</a
					>
				</p>
			</div>
		</div>

		<div class="form-container col-span-12 md:col-span-5">
			<Consultation />
		</div>
	</div>
</section>

<section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
	<h3 class="text-secondary-800 text-4xl font-serif text-center mb-12">Frequently Asked Questions</h3>
	<Faqs />
	<p class="mt-8 mb-8">
		The legal system can be daunting, especially if you are new to it. Choosing a knowledgable defense attorney is
		the best thing you can do for your future, but you can also arm yourself with information about your rights.
	</p>
	<p class="text-center">
		<a class="text-primary-800 underline" href="/faq/">Read more frequently asked questions here.</a>
	</p>
</section>
