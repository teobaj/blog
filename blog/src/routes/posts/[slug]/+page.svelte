<script lang="ts">
	export let data;
</script>

<div class="p-4 flex justify-center w-full">
	<article class="prose dark:prose-lg lg:prose-lg dark:prose-invert p-4">
		<svelte:component this={data.content} class="w-full" />
	</article>
</div>

<style>
</style>
