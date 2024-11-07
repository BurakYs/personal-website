<script lang="ts">
  import config from "$lib/config";
</script>

<div class="mt-20 mb-10">
  <div class="w-full h-full flex justify-center items-center">
    <div class="px-5 w-full h-full">
      <div
        class="w-full h-full mb-5 flex flex-col md:flex-row justify-center items-center"
      >
        <div class="mr-0 md:mr-8 flex shrink-0 justify-center">
          <img
            class="rounded-full ring-[3px] ring-theme-color w-44 h-44"
            src={config.image}
            alt="avatar"
          />
        </div>

        <div class="mt-3 w-full text-center md:text-left">
          <div class="flex justify-center md:justify-start">
            <span class="text-4xl pl-3 font-bold flex-none dark:text-white">
              Hey, I'm
              <span class="text-theme-color">
                {config.name}
              </span>
            </span>
          </div>
          <p class="pl-3 text-md mt-1 dark:text-white/50">
            {config.about}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>