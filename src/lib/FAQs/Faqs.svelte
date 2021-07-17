<script>
	import Faq from '$lib/FAQs/Faq.svelte';
	
	let faqItems = [
		{ 
			question: "What is the difference between a misdemeanor and a felony?",
			answer: "About 10 years"
		},
		{
			question: "Do I have to testify in court?",
			answer: "No you do not, if doing so will disadvantage you."
		},
		{
			question: "I have been served with a search warrant, what should I do?",
			answer: "You must immediately comply with the warrant, but also call legal counsel immediately."
		},
		{
			question: "How do I establish a good defense strategy for my case?",
			answer: "Find yourself a good attorney like KraussLaw."
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
