<script lang="ts">
  export let data;
  console.log(data)
</script>
<div class="p-4">
  <article class="prose lg:prose-xl bg-slate-100 p-4">
  <svelte:component this={data.content}  />
  </article>
</div>

<style>
  
</style>