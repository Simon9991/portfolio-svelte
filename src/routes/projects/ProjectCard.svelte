<script lang="ts">
    import { onMount } from 'svelte';
    import { Photo } from 'svelte-heros-v2';

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
    <div class="card-hover w-[600px] h-fit max-h-fit flex flex-col gap-4">
        <h2 class="font-semibold">{label}</h2>
        <p>{description}</p>
        <div class="end-section">
            {#if loading}
                <div
                    class="animate-pulse end-section-img bg-gray-300 flex items-center justify-center h-[270px]"
                >
                    <Photo size="30" color="#9ca3af" />
                </div>
            {:else if !loading && !error}
                <img class="end-section-img" src={img_placeholder} alt="project example" />
                <div class="w-full text-right text-sm text-opacity-75">
                    Click on the card to see more
                </div>
            {/if}
        </div>
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
        @apply rounded-md shadow-md opacity-90;
    }
</style>
