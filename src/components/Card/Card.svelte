<script lang="ts">
    let { label, hover = true }: { label: string; hover?: boolean } = $props();
</script>

<div class="{hover ? 'card-hover' : 'card'} w-[600px] h-fit">
    <h2 class="font-semibold">{label}</h2>
    <slot />
</div>
