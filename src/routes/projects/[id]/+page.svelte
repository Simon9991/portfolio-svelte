<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<div class="min-w-0 max-w-[70%] backdrop-blur-md bg-slate-700 bg-opacity-10 w-full h-24">
    <h2>{data.title}</h2>
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    <div>{@html data.content}</div>
</div>
