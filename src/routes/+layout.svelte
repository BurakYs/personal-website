<script lang="ts">
  import '$lib/styles/globals.css';
  import Header from '$components/Header.svelte';
  import Footer from '$components/Footer.svelte';
  import config from '$config';

  import { page } from '$app/stores';
</script>

<svelte:head>
    <title>{config.meta.title}</title>
    <meta name="og:title" content={config.meta.title}>
    <meta name="og:description" content={config.meta.description}>
    <meta name="og:url" content={$page.url.origin}>
    <meta name="twitter:description" content={config.meta.description}>
    <meta name="twitter:url" content={$page.url.origin}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content={config.meta.theme}>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet">
    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet">
</svelte:head>

<main class="bg-primary-light dark:bg-primary-dark min-h-screen border-t-theme-color border-t-4 h-screen overflow-y-scroll">
    <div class="mx-auto max-w-5xl">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</main>