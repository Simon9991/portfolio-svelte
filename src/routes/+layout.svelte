<script lang="ts">
    import '../app.css';
</script>

<div class="top-nav mb-4">
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
