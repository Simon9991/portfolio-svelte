<script lang="ts">
    import { onMount } from 'svelte';
    import '../app.css';

    // Reactive variable for tracking the scroll position
    let scrollY = 0;

    let bodyElement: HTMLElement | null = null;
    let navElement: HTMLElement | null = null;

    onMount(() => {
        const updateScroll = () => {
            scrollY = window.pageYOffset;
        };

        window.addEventListener('scroll', updateScroll);

        bodyElement = document.getElementsByTagName('body')[0];
        navElement = document.getElementById('nav');

        // TODO: change between light and dark theme
        const bgImage = `/img/bg-dark-${Math.floor(Math.random() * 5) + 1}.jpg`;

        if (bodyElement) {
            bodyElement.style.backgroundImage = `url(${bgImage})`;
        }

        // Cleanup the event listener when the component is destroyed
        return () => {
            window.removeEventListener('scroll', updateScroll);
        };
    });

    // Calculating the background position
    $: backgroundPositionY = scrollY * 0.5;

    $: {
        if (bodyElement && navElement) {
            bodyElement.style.backgroundPositionY = `${backgroundPositionY}px`;
            // moves the nav element at the opposite of the background
            // navElement.style.top = `-${scrollY / 1.5}px`;
        }
    }
</script>

<div id="nav" class="top-nav h-24 mb-4 bg-slate-800 bg-opacity-0 backdrop-blur-md">
    <a href="/">
        <img src="/img/my_profile_pic.jpg" alt="Simon profile" />
    </a>
    <div class="ml-auto flex gap-x-4">
        <a class="nav" href="/projects">Projects</a>
        <a class="nav" href="/contact-me">Contact</a>
        <a class="nav" href="/socials">Socials</a>
    </div>
</div>

<div class="w-full max-h-full min-w-full">
    <slot />
</div>

<style lang="postcss">
    img {
        @apply w-20 h-20;
        @apply object-cover;
        @apply rounded-full;
        @apply dark:grayscale; /* TODO: check if grayscale is needed */
        @apply hover:grayscale-0 transition-all duration-300 ease-in-out;
        @apply cursor-pointer;
    }

    .nav {
        @apply font-bold text-lg uppercase;
        @apply transition-opacity hover:opacity-75;
    }
</style>
