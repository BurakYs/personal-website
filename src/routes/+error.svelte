<script lang="ts">
  import { page } from '$app/state';

  const errorCode = page.status;
  const errorMessage = page.error?.message || 'An unexpected error occurred';
</script>

<div class="flex flex-col items-center justify-center min-h-screen">
  <div class="flex items-center">
    <span class="font-light text-5xl leading-tight">{errorCode}</span>
    <span class="flex items-center text-lg border-l border-gray-400 pl-4 ml-4 min-h-8">{errorMessage}</span>
  </div>
  <a class="mt-4 text-lg text-blue-400 hover:underline" href="/">Go back to home</a>
</div>