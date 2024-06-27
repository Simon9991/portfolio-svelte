export enum SectionType {
    Title,
    Subtitle,
    Body,
    InfoCard,
    WarningCard
}

type BlogImage = {
    src: string;
    place: 'start' | 'center' | 'end';
    inline: boolean;
};

type BlogSection = {
    type: SectionType;
    htmlText: string;
    image?: BlogImage;
};

export type BlogPost = {
    title: string;
    summary?: string;
    sections: BlogSection[];
};

export const SVELTE_DISCOVERY_POST: BlogPost = {
    title: 'My journey with Svelte',
    summary:
        'In this article, you will discover how Svelte made me enjoy Front-End. This will be about Svelte 4.',
    sections: [
        {
            type: SectionType.Title,
            htmlText: 'Discovering Svelte'
        },
        {
            type: SectionType.Body,
            htmlText: `<div class="flex flex-col gap-4">
                        <p>After spending <b>3 years</b> working with <kbd class="code-span">Django</kbd> in Python
                        for my graduating project, I was hating Front-End development. I think this comes from
                        the fact that the website was way too complex to use <kbd class="code-span">Django</kbd>.</p>
                        <p>After I joined my actual company, as an intern first, I was made aware that I was going to work with <kbd class="code-span">Svelte</kbd>.
                        Naturally, I had no idea what it was and rushed to their website to learn more about it.</p>
                        </div>
                    `
        },
        {
            type: SectionType.Subtitle,
            htmlText: 'First few days'
        },
        {
            type: SectionType.Body,
            htmlText: `<div class="flex flex-col gap-4">
<p>The first thing I did, was to follow the official <kbd>Svlete</kbd> <b>tutorial</b> on their website (link here: <a href="https://learn.svelte.dev/tutorial/welcome-to-svelte">Welcome to Svelte</a>.</p>
</div>`
        }
    ]
};
