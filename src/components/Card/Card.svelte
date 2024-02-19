<script lang="ts">
    export let label: string;
    export let hover = true;
</script>

<div class="{hover ? 'card-hover' : 'card'} w-[600px] h-fit">
    <h2 class="font-semibold">{label}</h2>
    <slot />
</div>
