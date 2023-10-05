<script lang="ts">
  import { InputChip } from '@skeletonlabs/skeleton';
  let list: string[] = ['foo', 'bar', 'fizz', 'buzz'];
</script>
<div class="p-2 flex flex-col">
  <InputChip bind:value={list} name="chips" placeholder="Enter any value..." />
  <button on:click={() => {list = [...list, 'item']}}>click</button>
</div>