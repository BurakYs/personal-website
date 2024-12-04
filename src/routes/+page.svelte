<script lang="ts">
  import Technologies from '$lib/components/Technologies.svelte';
  import About from '$lib/components/About.svelte';
  import Repositories from '$lib/components/Repositories.svelte';
  import Projects from '$lib/components/Projects.svelte';
</script>

<div>
  <About/>
  <div class="flex flex-col gap-y-16">
    <Repositories/>
    <Projects/>
    <Technologies/>
  </div>
</div>