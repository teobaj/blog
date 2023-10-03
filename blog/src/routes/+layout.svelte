<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

</script>

<div class="h-screen w-screen wrapper">
	<Header />
		<main>
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