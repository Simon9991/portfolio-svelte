<script lang="ts">
    // TODO: Import type Project

    // ! Important: 50 to 75 letters is recommended for description
    // Approximate card width: 600px max
    const projects = [
        {
            id: 1,
            title: 'UNIX shell program',
            description: 'Recreated the UNIX shell program from scratch, matches every bash options'
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

<div
    class="p-5 flex flex-col md:grid md: grid-cols-2 gap-4 md:gap-10 md:max-w-[80%] flex-wrap mr-auto ml-auto"
>
    {#each projects as project}
        <a href="/projects/{project.id}">
            <div class="card-hover w-[600px] h-fit">
                <h2 class="font-semibold">{project.title}</h2>
                <p>{project.description}</p>
            </div>
        </a>
    {/each}
</div>
