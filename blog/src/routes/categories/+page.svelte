<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  import PostList from '$lib/components/PostList.svelte';
  
  export let data;

  let list: string[] = [];
  let searchTerm: string = '';
  let posts: Post[] = []

  $: filteredCategories = data.categories.filter((category) => category.includes(searchTerm))

  function handleInput(e: any){
    searchTerm = e.target.value ?? '';
  }

  function addCategory(category: string){
    list = Array.from(new Set([...list, category]))
  }

  async function searchPosts (){
    fetch('/api/posts?' + new URLSearchParams({categories: list}))
      .then(res => res.json())
      .then(data => {posts = data})
  } 
  

</script>
<div class="p-4 flex flex-col gap-4 w-full max-w-[800px]">
  <div class="w-full flex gap-2">
    <InputChip bind:value={list} name="chips" placeholder="Enter any value..." on:input={handleInput} rounded={"rounded-md"} />
    <button class="btn bg-primary-500  rounded-md h-fit" on:click={searchPosts}>Search</button>
  </div>
  <ul class="list w-full flex flex-wrap gap-1">
    {#each filteredCategories as category}
      <li>
        <button class="card p-2 w-full rounded-md text-primary-500 hover:bg-primary-500 hover:text-primary-900" on:click={() => addCategory(category)} >{category}</button>
      </li>
    {/each}
  </ul>

  
</div>
  <PostList posts={posts} />