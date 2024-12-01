<script lang="ts">
  import Technologies from '$lib/components/Technologies.svelte';
  import About from '$lib/components/About.svelte';
  import Repositories from '$lib/components/Repositories.svelte';
</script>

<div>
  <About/>
  <div class="flex flex-col gap-y-12">
    <Repositories/>
    <Technologies/>
  </div>
</div>