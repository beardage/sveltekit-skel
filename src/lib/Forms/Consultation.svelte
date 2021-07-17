<script lang="ts">

	async function handleSubmit(event) {
		console.log(event);
		console.log(event.target);
		console.log(event.target.firstname.value);
		console.log(event.target.lastname.value);
		console.log(event.target.email.value);
		console.log(event.target.message.value);

		let formInfo = new FormData(event.target);

		const response = await fetch("/", {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: formInfo,
		}).then(() => console.log('form successfully submitted')).catch((error) => console.log(error));
	}

</script>

<form netlify netlify-honeypot="bot-field" name="consultation-form" class="w-full bg-gray-100 shadow rounded p-6" on:submit|preventDefault={handleSubmit}>
	<h4 class="text-center text-secondary-800 font-serif text-4xl">Get A Free Consultation</h4>
	<hr class="mt-2 mb-4">
	<div class="flex flex-wrap -mx-3 mb-2">
		<div class="w-full px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-secondary-800 text-xs font-bold mb-2"
				for="name">
				Name
			</label>

			<input
				class="appearance-none block w-full bg-gray-300 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
				id="name"
				name="name"
				type="text"
				placeholder="John Smith"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-2">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-secondary-800 text-xs font-bold mb-2"
				for="email"
			>
				E-mail

			</label>

			<input
				class="appearance-none block w-full bg-gray-300 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
				id="email"
				name="email"
				type="email"
				placeholder="johnsmith@example.com"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-2">
		<div class="w-full px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-secondary-800 text-xs font-bold mb-2"
				for="phone">
				Phone
			</label>

			<input
				class="appearance-none block w-full bg-gray-300 text-gray-800 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200"
				id="phone"
				name="phone"
				type="phone"
				placeholder="520-123-1234"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-2">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-secondary-800 text-xs font-bold mb-2"
				for="message"
			>
				Message
			</label>

			<textarea
				class=" no-resize appearance-none block w-full bg-gray-300 text-gray-800 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-200 h-48 resize-none"
				id="message"
				name="message"
			/>
		</div>
	</div>

	<input class="hidden" type="text" name="bot-field">
	<div class="md:flex md:items-center">
		<div class="w-full">
			<button
				class="w-full shadow bg-primary-700 text-gray-100 hover:bg-primary-800 focus:shadow-outline focus:outline-none font-bold px-8 py-2 rounded uppercase"
				type="submit">
				Submit
			</button>
		</div>


	</div>
</form>


