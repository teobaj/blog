<script lang="ts">
  export let data
</script>

<ul class="list p-4 gap-4 grid grid-cols-1 md:grid-cols-3 max-w-[1200px]">
  {#each data.posts as post}
    <li>
    <div class="w-full card h-full">
      <header>
        <img src={post.img} class="bg-black/50 w-full aspect-[21/9] rounded-t-lg object-cover" />
      </header>
      <div class="p-4">
        <p class="flex gap-2 text-primary-500">
        {#each post.categories as category}
          <span>#{category}</span>
        {/each}
        </p>
        <a class="font-bold" href={`/posts/${post.slug}`}>{post.title}</a>
        <p>{post.description}</p>
      </div>
      <hr/>
      <footer class="p-4 flex justify-start items-center space-x-4">
        {post.date}
      </footer>
    </div>
    </li>
  {/each}
</ul>

<style>
  .card {
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
</style>