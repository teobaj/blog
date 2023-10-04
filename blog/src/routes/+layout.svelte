<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<div class="h-screen w-screen wrapper bg-gradient">
	<Header />
		<main class="flex flex-col items-center">
			<slot />
		</main>
	<Footer />
</div>

<style>
	.wrapper{
		display: grid;
		grid-template-rows: auto 1fr 40px;
	}
</style>