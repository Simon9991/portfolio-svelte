import { SVELTE_DISCOVERY_POST, type BlogPost } from '@/lib/posts';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    let post: BlogPost = {
        title: '',
        sections: []
    };

    switch (params.name) {
        case 'svelte-discovery':
            post = SVELTE_DISCOVERY_POST;
            break;

        default:
            break;
    }

    return {
        id: params.name,
        post
    };
};
