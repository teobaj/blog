<script lang="ts">
  export let data;
  console.log(data)
</script>
<div class="p-4 flex justify-center w-full">
  <article class="prose dark:prose-md lg:prose-md dark:prose-invert p-4 w-full text-white">
    <svelte:component this={data.content}  class="w-full" />
  </article>
</div>

<style>
  
</style>