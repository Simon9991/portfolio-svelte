// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

const API_KEY = import.meta.env.API_KEY || 'empty';
const AUTH_DOMAIN = import.meta.env.AUTH_DOMAIN || 'empty';
const PROJECT_ID = import.meta.env.PROJECT_ID || 'empty';
const STORAGE_BUCKET = import.meta.env.STORAGE_BUCKET || 'empty';
const MESSAGING_SENDER_ID = import.meta.env.MESSAGING_SENDER_ID || 'empty';
const APP_ID = import.meta.env.APP_ID || 'empty';
const MEASUREMENT_ID = import.meta.env.MEASUREMENT_ID || 'empty';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
