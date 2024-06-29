// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';

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
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
