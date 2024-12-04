<script lang="ts">
  import '$lib/styles/globals.css';

  import { page } from '$app/stores';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import config from '$lib/config';

  let { children } = $props();
</script>

<svelte:head>
  <title>{config.meta.title}</title>
  <meta name="og:title" content={config.meta.title}/>
  <meta name="og:description" content={config.meta.description}/>
  <meta name="og:url" content={$page.url.origin}/>
  <meta name="twitter:description" content={config.meta.description}/>
  <meta name="twitter:url" content={$page.url.origin}/>
  <meta name="twitter:card" content="summary_large_image"/>
  <link rel="icon" href={config.meta.favicon}>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
    rel="stylesheet"
  />
</svelte:head>

<main class="bg-background min-h-[100dvh] border-t-4 border-theme-color h-screen overflow-y-scroll">
  <div class="mx-auto max-w-5xl px-5">
    <Header/>
    {@render children()}
    <Footer/>
  </div>
</main>