<script lang="ts">
  import '$lib/styles/app.css';

  import Hero from '$components/Hero.svelte';
  import Technologies from '$components/Technologies.svelte';
  import Projects from '$components/Projects.svelte';
  import Repositories from '$components/Repositories.svelte';
  import Footer from '$components/Footer.svelte';

  import config from '$lib/config';
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <meta name="description" content={config.meta.description}/>
  <meta name="og:title" content={config.meta.title}/>
  <meta name="og:description" content={config.meta.description}/>
  <meta name="twitter:description" content={config.meta.description}/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="icon" href={config.meta.favicon}>
</svelte:head>

<div class="min-h-[100dvh] bg-black text-white overflow-hidden">
  <main class="container mx-auto px-6 space-y-20">
    <Hero/>
    <Technologies/>
    <Projects/>
    <Repositories/>
  </main>

  <Footer/>
</div>