// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxjesZFZPJVFyadLkbhbOkMCMfWqH9hL8",
    authDomain: "doublehmovie.firebaseapp.com",
    projectId: "doublehmovie",
    storageBucket: "doublehmovie.appspot.com",
    messagingSenderId: "1092998419522",
    appId: "1:1092998419522:web:0c0431c85bf75653f349db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)