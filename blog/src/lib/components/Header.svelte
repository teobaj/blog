<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton';
  import { LightSwitch } from '@skeletonlabs/skeleton';
  
</script>



<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<a slot="lead" href="/">{"<TB />"}</a>
  <div class="flex gap-4">
    <a href="/posts">POSTS </a>
    <a href="/categories">CATEGORIES</a>
    <a href="/about">ABOUT </a>
    <a href="/contact">CONTACT</a>
  </div>
	<svelte:fragment slot="trail">
    <LightSwitch />
  </svelte:fragment>
</AppBar> 