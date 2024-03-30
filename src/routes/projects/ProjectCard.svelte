<script lang="ts">
    import { onMount } from 'svelte';
    import { quadInOut } from 'svelte/easing';
    import { fade } from 'svelte/transition';

    export let label: string;
    export let description: string; // Can be HTML string
    export let project_id: number;

    const img_placeholder = 'https://picsum.photos/600/300';

    // state
    let loading = true;
    let error = false;

    onMount(() => {
        const img = new Image();

        img.src = img_placeholder;
        img.onload = () => (loading = false);

        img.onerror = () => {
            loading = false;
            error = true;
        };
    });
</script>

<a href="/projects/{project_id}">
    <div class="card-hover w-[600px] h-[400px] flex flex-col gap-4">
        <h2 class="font-semibold">{label}</h2>
        <p>{description}</p>
        <div class="end-section">
            {#if loading}
                <div
                    transition:fade={{ duration: 200, easing: quadInOut }}
                    class="end-section-img flex flex-col items-center h-full justify-center"
                >
                    <svg
                        class="animate-spin h-20 w-20 self-center"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                </div>
            {:else if !loading && !error}
                <img
                    transition:fade={{ delay: 230, duration: 200, easing: quadInOut }}
                    class="end-section-img"
                    src={img_placeholder}
                    alt="project example"
                />
            {/if}
        </div>
        <div class="w-full text-right text-sm text-opacity-75">Click on the card to see more</div>
    </div>
</a>

<style lang="postcss">
    .end-section {
        @apply relative;
        @apply flex flex-col items-center justify-center gap-4;
        @apply h-full;
    }

    .end-section-img {
        @apply w-[80%];
        @apply rounded-md opacity-90;
    }
</style>
