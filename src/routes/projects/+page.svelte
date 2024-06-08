<script lang="ts">
    // TODO: Import type Project

    import ProjectCard from './ProjectCard.svelte';

    // ! Important: 50 to 75 letters is recommended for description
    // Approximate card width: 600px max
    const projects = [
        {
            id: 1,
            title: 'UNIX shell program',
            description:
                'Recreated the UNIX shell program in C, from scratch, matches every bash options'
        },
        {
            id: 2,
            title: 'Chess game & engine',
            description: 'A basic chess game with an engine. Written in C++ and SFML'
        },
        {
            id: 3,
            title: 'Portfolio website',
            description:
                'This is the website you are currently looking at. Written in Svelte and SvelteKit. Rust is used for the Backend'
        },
        {
            id: 4,
            title: "Medic'Follow",
            description: 'Medical website which was a three years end of study project.'
        }
    ];
</script>

<div class="wrapper">
    {#each projects as project}
        <div class="w-full h-full flex items-center justify-center">
            <ProjectCard
                label={project.title}
                description={project.description}
                project_id={project.id}
            />
        </div>
    {/each}
</div>

<style lang="postcss">
    .wrapper {
        @apply p-5 ml-auto mr-auto gap-10 max-w-[80%];
        @apply flex flex-col flex-wrap;
    }
</style>
