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
		}).then(() => console.log('form succesfully submitted')).catch((error) => console.log(error));
	}

</script>

<form netlify netlify-honeypot="bot-field" name="contact-form" class="w-full my-20" on:submit|preventDefault={handleSubmit}> 
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
				for="firstname">
				First Name
			</label>

			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
				id="firstname"
				name="firstname"
				type="text"
				placeholder="Jane"
			/>

			<p class="text-red-500 text-xs italic">Please fill out this field.</p>
		</div>

		<div class="w-full md:w-1/2 px-3">
			<label
				class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
				for="lastname"
			>
				Last Name
			</label>

			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="lastname"
				name="lastname"
				type="text"
				placeholder="Doe"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
				for="email"
			>
				E-mail
			</label>

			<input
				class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="email"
				name="email"
				type="email"
			/>

			<p class="text-gray-600 text-xs italic">Some tips - as long as needed</p>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
				for="message"
			>
				Message
			</label>

			<textarea
				class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
				id="message"
				name="message"
			/>

			<p class="text-gray-600 text-xs italic">
				Re-size can be disabled by set by resize-none / resize-y / resize-x / resize
			</p>
		</div>
	</div>

	<input class="hidden" type="text" name="bot-field">
	<div class="md:flex md:items-center">
		<div class="md:w-1/3">
			<button
				class="shadow bg-primary-400 hover:bg-primary-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
				type="submit">
				Send
			</button>
		</div>

		<div class="md:w-2/3" />

	</div>
</form>


