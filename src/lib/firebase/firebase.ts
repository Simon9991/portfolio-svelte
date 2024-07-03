// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { derived, writable, type Readable } from 'svelte/store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAR-WQRhOJ7PNkZVOQVWf2i6Bhdf3mKCRQ',
    authDomain: 'simon-portfolio-9991.firebaseapp.com',
    projectId: 'simon-portfolio-9991',
    storageBucket: 'simon-portfolio-9991.appspot.com',
    messagingSenderId: '672073603194',
    appId: '1:672073603194:web:952af2d32290c450d343c3',
    measurementId: 'G-F2PS4QNQHM'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

/**
 * @returns a store with the current fireabase user
 */
function userStore() {
    let unsubscribe: () => void;

    if (!auth || !globalThis.window) {
        // TODO: change to toast or alert
        console.warn('Auth is not initialized or not in browser');
        const { subscribe } = writable<User | null>(null);
        return {
            subscribe
        };
    }

    const { subscribe } = writable(auth.currentUser, (set) => {
        unsubscribe = onAuthStateChanged(auth, (user) => {
            set(user);
        });

        return () => unsubscribe();
    });

    return {
        subscribe
    };
}

export const user = userStore();

/**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(path: string) {
    let unsubscribe: () => void;

    const docRef = doc(db, path);

    const { subscribe } = writable<T | null>(null, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set((snapshot.data() as T) ?? null);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
        ref: docRef,
        id: docRef.id
    };
}

type UserData = {
    username: string;
    bio: string;
    photoURL: string;
    links: any[];
    isAdmin: boolean;
};

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
    if ($user) {
        const userDocStore = docStore<UserData>(`users/${$user.uid}`);

        userDocStore.subscribe((data) => {
            if (data) {
                set({ ...data, isAdmin: data.isAdmin ?? false });
            } else {
                set(null);
            }
        });
    } else {
        set(null);
    }
});
