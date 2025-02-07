<script lang="ts">
  import '$lib/styles/app.css';

  import Footer from '$components/Footer.svelte';
  import config from '$lib/config';

  const { children } = $props();
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <meta name="description" content={config.meta.description}/>
  <meta name="og:title" content={config.meta.title}/>
  <meta name="og:description" content={config.meta.description}/>
  <meta name="twitter:description" content={config.meta.description}/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="icon" href={config.meta.favicon}>

  {#if config.plausibleAnalytics.enabled}
    <script defer data-domain={config.plausibleAnalytics.domain} src={config.plausibleAnalytics.fileName}></script>
    <script>
      window.plausible = window.plausible || function () { (window.plausible.q = window.plausible.q || []).push(arguments); };
    </script>
  {/if}
</svelte:head>

<div class="min-h-[100dvh] bg-black text-white overflow-hidden">
  <main class="container mx-auto px-6 space-y-20">
    {@render children()}
  </main>

  <Footer/>
</div>