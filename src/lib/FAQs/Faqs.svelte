<script>
	import Faq from '$lib/FAQs/Faq.svelte';

	let faqItems = [
		{
			question: 'Question?',
			answer: 'Answer'
		},
		{
			question: 'Question?',
			answer: 'Answer'
		},
		{
			question: 'Question?',
			answer: 'Answer'
		}
	];
</script>

<div class="faqs block">
	{#each faqItems as faq}
		<Faq {faq} />
	{:else}
		<p>No FAQs Available!</p>
	{/each}
</div>
