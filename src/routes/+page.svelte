<script lang="ts">
  import Technologies from "$lib/components/Technologies.svelte";
  import About from "$lib/components/About.svelte";
  import GithubCard from "$lib/components/Repositories.svelte";
</script>

<div class="mt-10 px-5">
  <About />
  <div class="mt-10">
    <GithubCard />
    <Technologies />
  </div>
</div>