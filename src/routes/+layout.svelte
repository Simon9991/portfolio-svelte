<script lang="ts">
    import '../app.css';

    const { children } = $props();

    // Nav elements
    const navElements = [
        { name: 'Blog', href: '/blog-post' },
        { name: 'Experience', href: '/my-experience' },
        // { name: 'Projects', href: '/projects' },
        { name: 'Socials', href: '/socials' }
    ];
</script>

<div id="nav" class="top-nav h-24 mb-4 bg-slate-800 bg-opacity-0 backdrop-blur-md">
    <a href="/">
        <img src="/img/my_profile_pic.jpg" alt="Simon profile" />
    </a>
    <div class="ml-auto flex gap-x-4">
        {#each navElements as navElement}
            <a class="nav" href={navElement.href}>{navElement.name}</a>
        {/each}
    </div>
</div>

<div class="w-full max-h-full min-w-full">
    {@render children()}
</div>

<style lang="postcss">
    img {
        @apply w-20 h-20;
        @apply object-cover;
        @apply dark:grayscale; /* TODO: check if grayscale is needed */
        @apply hover:grayscale-0 transition-all duration-300;
        @apply cursor-pointer;
        @apply hover:shadow-[rgba(0,0,15,1)_5px_5px_15px_0px];
        @apply rounded-full;
    }

    .nav {
        @apply font-bold text-lg uppercase;
        @apply transition-all duration-300;
    }

    .nav:hover {
        color: #fff;
        text-shadow:
            0 0 10px #fff,
            0 0 20px #fff;
    }
</style>
