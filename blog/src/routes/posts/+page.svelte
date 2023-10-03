<script lang="ts">
  export let data
  console.log(data);
</script>

<ul class="list p-4 gap-4 flex flex-col">
  {#each data.posts as post}
    <li>
    <div class="w-full card">
      <header>
        <img src={post.img} class="bg-black/50 w-full aspect-[21/9] rounded-t-lg object-cover" />
      </header>
      <div class="p-4">
        <p class="flex gap-2 text-primary-300">
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