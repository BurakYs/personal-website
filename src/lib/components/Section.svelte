<script lang="ts">
  type SectionProps = {
    id: string;
    title: string;
    children: any;
  }

  let { id, title, children }: SectionProps = $props();
</script>

<section id={id}>
  <h2 class="text-2xl font-bold mb-4 gradient-text">
    {title}
  </h2>
  {@render children()}
</section>