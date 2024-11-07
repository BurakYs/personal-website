<script lang="ts">
  import Skills from "$components/Skills.svelte";
  import About from "$components/About.svelte";
  import GithubCard from "$components/Repositories.svelte";
</script>

<div class="mt-10 px-5">
  <About />
  <div class="mt-10">
    <GithubCard />
    <Skills />
  </div>
</div>