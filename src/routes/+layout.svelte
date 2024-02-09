<script lang="ts">
    import '../app.css';
</script>

<div class="top-nav">
    <img src="/img/my_profile_pic.jpg" alt="Simon profile" />
    <div class="ml-auto flex gap-x-4">
        <a href="/projects">Projects</a>
        <a href="/contact-me">Contact</a>
    </div>
</div>

<slot />

<style lang="postcss">
    img {
        @apply w-20 h-20;
        @apply object-cover;
        @apply rounded-full;
        @apply dark:grayscale; /* TODO: check if grayscale is needed */
    }

    a {
        @apply font-bold text-lg uppercase;
        @apply transition-opacity hover:opacity-75;
    }
</style>
