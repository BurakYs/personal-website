<script lang="ts">
  import Skills from "$lib/components/Skills.svelte";
  import About from "$lib/components/About.svelte";
  import GithubCard from "$lib/components/Repositories.svelte";
</script>

<div class="mt-10 px-5">
  <About />
  <div class="mt-10">
    <GithubCard />
    <Skills />
  </div>
</div>