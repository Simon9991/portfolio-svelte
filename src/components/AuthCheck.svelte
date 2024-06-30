<script lang="ts">
    import { user } from '@/lib/firebase/firebase';
    import type { Snippet } from 'svelte';

    let { children }: { children: Snippet } = $props();
</script>

{#if $user}
    {@render children()}
{:else}
    <p>
        You must be signed in to view this content.
        <a class="signin" href="/login">Sign in</a>
    </p>
{/if}
