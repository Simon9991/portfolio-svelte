<script lang="ts">
    import type { PageData } from './$types';

    type PageProps = {
        data: PageData;
    };

    let { data }: PageProps = $props();
</script>

<div
    class="min-w-0 max-w-[70%] min-h-[300px] max-h-[70%] overflow-auto m-auto p-4 rounded-lg backdrop-blur-md bg-[#101720] bg-opacity-80 w-full"
>
    <h2>{data.title}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <div>{@html data.content}</div>
</div>
