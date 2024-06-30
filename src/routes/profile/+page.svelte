<script lang="ts">
    import AuthCheck from '@/components/AuthCheck.svelte';
    import { db, user } from '@/lib/firebase/firebase';
    import { doc, getDoc, writeBatch } from 'firebase/firestore';
    import { userData } from '@/lib/firebase/firebase';

    let username = $state('');
    let loading = false;
    let isAvailable = $state(false);

    // eslint-disable-next-line no-undef
    let debounceTimer: NodeJS.Timeout;

    async function checkAvailability() {
        isAvailable = false;
        if (!isValid) return;
        clearTimeout(debounceTimer);

        loading = true;

        debounceTimer = setTimeout(async () => {
            console.log('checking availability of', username);

            const ref = doc(db, 'usernames', username);
            const exists = await getDoc(ref).then((doc) => doc.exists());

            isAvailable = !exists;
            loading = false;
        }, 500);
    }

    async function confirmUsername() {
        console.log('confirming username', username);
        const batch = writeBatch(db);
        batch.set(doc(db, 'usernames', username), { uid: $user?.uid });
        batch.set(doc(db, 'users', $user!.uid), {
            username,
            photoURL: $user?.photoURL ?? null,
            published: true,
            bio: 'I am the Walrus',
            links: [
                {
                    title: 'Test Link',
                    url: 'https://kung.foo',
                    icon: 'custom'
                }
            ]
        });

        await batch.commit();

        username = '';
        isAvailable = false;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function preventDefault(fn: any) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return function (event: any) {
            event.preventDefault();
            fn.call(this, event);
        };
    }

    const re = /^(?=[a-zA-Z0-9._]{3,16}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    let isValid = $derived(username?.length > 2 && username.length < 16 && re.test(username));
    let isTouched = $derived(username.length > 0);
    let isTaken = $derived(isValid && !isAvailable && !loading);
</script>

<AuthCheck>
    <div class="card mx-auto px-4 py-6">
        <h2 class="mb-4">Username</h2>
        {#if $userData?.username}
            Your username is <b>{$userData.username}</b>.
        {:else}
            <form class="w-2/5" onsubmit={preventDefault(confirmUsername)}>
                <input
                    type="text"
                    placeholder="Username"
                    class="input w-full"
                    bind:value={username}
                    oninput={checkAvailability}
                />
                <div class="my-4 min-h-16 px-8 w-full flex flex-col gap-4">
                    {#if loading}
                        <p class="text-secondary">Checking availability of @{username}...</p>
                    {/if}

                    {#if !isValid && isTouched}
                        <p class="text-error text-sm">
                            must be 3-16 characters long, alphanumeric only
                        </p>
                    {/if}

                    {#if isValid && !isAvailable && !loading}
                        <p class="text-warning text-sm">
                            @{username} is not available
                        </p>
                    {/if}

                    {#if isAvailable}
                        <button class="signin mt-4 w-fit">
                            Confirm username @{username}
                        </button>
                    {/if}
                </div>
            </form>
        {/if}
    </div>
</AuthCheck>
