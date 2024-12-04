<script lang="ts">
  import { setupHorizontalSlider } from '$lib/horizontal-slider';
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let scrolledToStart = $state(true);
  let scrolledToEnd = $state(false);

  onMount(() => {
    const slider = setupHorizontalSlider(container);

    function handleScroll() {
      scrolledToStart = container.scrollLeft === 0;
      scrolledToEnd = container.scrollLeft >= container.scrollWidth - container.clientWidth - 25;
    }

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      slider.destroy();
    };
  });

  const defaultOverlayStyle = 'absolute inset-y-0 w-24 sm:w-40 from-background pointer-events-none';

  let { children } = $props();
</script>

<div class="relative">
  <div bind:this={container} class="flex overflow-x-auto overflow-y-hidden gap-2">
    <div class="{defaultOverlayStyle} left-0 bg-gradient-to-r {scrolledToStart ? 'hidden' : 'block'}"></div>
    <div class="{defaultOverlayStyle} right-0 bg-gradient-to-l {scrolledToEnd ? 'hidden' : 'block'}"></div>
    {@render children()}
  </div>
</div>