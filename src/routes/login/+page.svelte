<!-- "Hidden" route, should be accessible only for people who want an account to comment on the blog posts later -->
<!-- For now used for admins to add blog posts -->
<script lang="ts">
    import { auth, user } from '@/lib/firebase/firebase';
    import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        const user = await signInWithPopup(auth, provider);
        console.log(user);
    }
</script>

<div class="card px-6 py-4 max-w-lg flex flex-col w-fit mx-auto gap-4">
    {#if $user}
        <h1>Signed in</h1>
        <p>You are currently signed in as <b>{$user.displayName}</b></p>
        <button
            class="px-4 py-2 rounded-lg bg-yellow-600 hover:brightness-110 transition-all"
            onclick={() => signOut(auth)}
        >
            Sign out
        </button>
    {:else}
        <h1 class="uppercase">Login</h1>
        <button
            class="px-4 py-2 rounded-lg bg-purple-700 hover:brightness-110 transition-all"
            onclick={signInWithGoogle}
        >
            Sign in with Google
        </button>
    {/if}
</div>
