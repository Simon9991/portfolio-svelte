<script lang="ts">
    // ! Important: 50 to 75 letters is recommended for description
    // Approximate card width: 600px max
    const projects = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Description 1 long long long long long long long'
        },
        { id: 2, title: 'Project 2', description: 'Description 2 long long long long' },
        {
            id: 3,
            title: 'Project 3 which has a longer title than card',
            description: 'Description 3'
        },
        {
            id: 4,
            title: 'Project 4',
            description:
                'Description 4 which should be very long and longer than the card width for testing purposes'
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
