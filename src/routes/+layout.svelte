<script>
    import config from '$config';
    import '$lib/styles/globals.css';
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
    <title>{config.meta.title}</title>
    <meta name="og:title" content={config.meta.title}>
    <meta name="og:description" content={config.meta.description}>
    <meta name="og:url" content={config.meta.url}>
    <meta name="og:image" content={config.meta.image}>
    <meta name="twitter:description" content={config.meta.description}>
    <meta name="twitter:url" content={config.meta.url}>
    <meta name="twitter:image" content={config.meta.image}>
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content={config.meta.theme}>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet">
    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet">
</svelte:head>

<main class="dark:bg-back bg-[#f3f4f6] min-h-screen border-t-main-theme border-t-4 h-screen overflow-y-scroll">
    <div class="mx-auto max-w-5xl">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</main>