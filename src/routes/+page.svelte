<script>
    import { onMount } from 'svelte';
    import Skills from '$components/Skills.svelte';
    import About from '$components/About.svelte';
    import GithubCard from '$components/Repositories.svelte';
    import config from '$config';

    onMount(() => {
        fetch('https://api.' + config.projects[0].url.substring(8) + '/healthcheck').then(() => null).catch(() => null);
    });
</script>

<div class="mt-10 px-5">
    <About/>
    <div class="mt-10">
        <GithubCard/>
        <Skills/>
    </div>
</div>