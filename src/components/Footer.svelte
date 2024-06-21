<script lang="ts">
    import config from '$config';

    let color = 'text-red-500';
    let randomColor = () => {
        const colors = [
            'text-red-500',
            'text-blue-500',
            'text-green-500',
            'text-yellow-500',
            'text-purple-500',
            'text-orange-500'
        ];

        const random = Math.floor(Math.random() * colors.length);
        color = colors[random];
    };

    let logo = {
        discord: {
            icon: 'discord',
            alt: 'Discord',
            href: `https://discord.com/users/${config.social.discordId}`,
            target: '_blank'
        },
        github: {
            icon: 'github',
            alt: 'GitHub',
            href: `https://github.com/${config.social.github}`,
            target: '_blank'
        }
    };
</script>

<div class="p-5 mt-10 sm:mb-0 mb-16">
    <div class="w-full items-center h-12">
        <div class="flex justify-between items-center">
            <div></div>
            <div class="hidden sm:block">
                <span class="ml-3 hidden sm:block dark:text-white items-center md:font-medium">
                    Developed with
                    <span
                            class="cursor-pointer {color}"
                            on:click={() => randomColor()}
                            on:keydown={() => randomColor()}
                            role="button"
                            tabindex="0"
                            aria-label="Change color"
                    >
                        <i class="fas fa-heart text-lg"></i>
                    </span>
                    by
                    <a href={'https://github.com/' + config.social.github}>
                        <span class="text-main-theme font-bold underline">
                            {config.social.github}
                        </span>
                    </a>
                </span>
            </div>
            <div class="block sm:hidden">
                <span class="px-1 dark:text-white items-center md:font-medium">
                    Developed by
                    <span class="text-main-theme font-bold underline">
                        {config.name}
                    </span>
                </span>
            </div>

            <div class="flex mr-4 text-md">
                <a class="mr-5" href={logo.discord.href} target={logo.discord.target}>
                    <i class={`fab fa-${logo.discord.icon} dark:text-white`}/>
                </a>
                <a href={logo.github.href} target={logo.github.target}>
                    <i class={`fab fa-${logo.github.icon} dark:text-white`}/>
                </a>
            </div>
        </div>
    </div>
</div>