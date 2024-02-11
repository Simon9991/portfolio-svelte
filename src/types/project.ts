type Project = {
    id: number;
    title: string;
    description: string; // TODO: will probably be an HTML string to support markdown
    url: string;
    image: string | null;
};

export type { Project };
