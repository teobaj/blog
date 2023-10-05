<script>
	import '../app.postcss';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from './transition.svelte'
	export let data;
	console.log(data)
</script>

<div class="h-screen w-screen wrapper bg-gradient">
	<Header />
		<PageTransition path={data.path}>
			<main class="w-full h-full flex flex-col items-center">
				<slot />
			</main>
		</PageTransition>
	<Footer />
</div>

<style>
	.wrapper{
		display: grid;
		grid-template-rows: auto 1fr 40px;
	}
</style>