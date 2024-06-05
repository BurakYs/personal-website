<script>
    import '$lib/styles/globals.css';
    import Header from '$components/Header.svelte';
    import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet">
    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet">
</svelte:head>

<main class="dark:bg-back bg-[#f3f4f6] min-h-screen border-t-main-theme border-t-4 scrollbar-thin scrollbar-thumb-main-theme h-screen overflow-y-scroll">
    <div class="mx-auto max-w-5xl">
        <Header/>
        <slot/>
        <Footer/>
    </div>
</main>