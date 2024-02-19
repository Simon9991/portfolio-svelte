<script lang="ts">
    export let label: string;
    export let description: string; // Can be HTML string
    export let project_id: number;

    const img_placeholder = 'https://picsum.photos/600/300';
</script>

<a href="/projects/{project_id}">
    <div class="card-hover w-[600px]">
        <div class="flex flex-row">
            <div class="w-[550px] flex flex-col gap-y-2">
                <h2 class="font-semibold">{label}</h2>
                <p>{description}</p>
                <div class="end-section">
                    <img class="end-section-img" src={img_placeholder} alt="project example" />
                </div>
            </div>
            <div class="w-[50px] self-center">Test</div>
        </div>
    </div>
</a>

<style lang="postcss">
    .end-section {
        @apply relative;
        @apply flex flex-col items-center justify-center gap-4;
    }

    .end-section-img {
        @apply w-[80%];
        @apply rounded-md opacity-90;
    }
</style>
