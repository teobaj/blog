<script lang="ts">
  import { fade } from 'svelte/transition';
  export let path = ''
</script>

{#key path}
  <div class="w-full h-full" in:fade>
    <slot />
  </div>
{/key}