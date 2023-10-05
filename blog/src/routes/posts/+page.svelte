<script lang="ts">
  import PostList from '$lib/components/PostList.svelte';
  export let data
</script>

<PostList posts={data.posts}/>
