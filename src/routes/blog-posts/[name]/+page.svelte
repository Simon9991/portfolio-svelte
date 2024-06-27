<script lang="ts">
    import { SectionType } from '@/lib/posts';
    import type { PageData } from './$types';

    type BlogProps = {
        data: PageData;
    };

    let { data }: BlogProps = $props();

    const post = data.post;
</script>

<div class="card max-w-[850px] w-[850px] flex flex-col mx-auto">
    <div class="block mb-8">
        <h1 class="mb-2 font-bold">{post.title}</h1>
        <p class="italic">{post.summary}</p>
    </div>

    {#each post.sections as section}
        {#if section.type === SectionType.Title}
            <h2 class="my-6 font-bold uppercase">{section.htmlText}</h2>
        {:else if section.type === SectionType.Subtitle}
            <h3 class="mt-6 mb-4 font-semibold uppercase">{section.htmlText}</h3>
        {:else if section.type === SectionType.Body}
            {@html section.htmlText}
        {/if}
    {/each}
</div>
