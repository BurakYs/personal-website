<script lang="ts">
    import { onMount } from 'svelte';
    import config from '$config';

    let myData: Record<string, any> = {};
    onMount(async () => {
        myData = await (await fetch(`https://api.lanyard.rest/v1/users/${config.social.discordId}`)).json();
    });
</script>

<div class="mt-20 mb-10">
    <div class="w-full h-full flex justify-center items-center">
        {#if myData.success}
            <div class="px-5 w-full h-full">
                <div class="w-full h-full mb-5 md:flex justify-center items-center">
                    <div class="mr-8  flex md:shrink-0 justify-center">
                        <img
                                class={'rounded-full ring-[3px] ring-main-theme  w-44 h-44 '}
                                src={`https://cdn.discordapp.com/avatars/${myData.data.discord_user.id}/${myData.data.discord_user.avatar}.${myData.data.discord_user.avatar.startsWith('a_') ? 'gif' : 'png'}`}
                                alt="avatar"
                        />
                        <div class="relative">
                            <span class={`w-6 h-6 bg-[#181b24] rounded-full absolute top-32 right-2`}>
                                <i class={`w-7 h-7 absolute pulse-avatar-${myData.data.discord_status.toLowerCase()} `}/>
                            </span>
                        </div>
                    </div>

                    <div class="mt-3 w-full">
                        <div class="flex">
                            <span class=" text-4xl pl-3 font-bold flex-none dark:text-white">
                                Hey, I'm
                                <span class="text-main-theme">
                                  {config.name}
                                </span>
                              </span>
                        </div>
                        <p class="pl-3 text-md mt-1 dark:text-white/50 ">
                            {config.about}
                        </p>
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>