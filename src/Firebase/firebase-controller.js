// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase-import.js";
import { getFirestore } from "./firebase-import.js";

const firebaseConfig = {
    apiKey: "AIzaSyBYQRWOJCKW_FSQzdmKwZBZ6Bl3hq6ZZfo",
    authDomain: "ninja-social-network.firebaseapp.com",
    projectId: "ninja-social-network",
    storageBucket: "ninja-social-network.appspot.com",
    messagingSenderId: "831935966918",
    appId: "1:831935966918:web:1d6c8a571c41c911bf31c7",
    measurementId: "G-C0G4TLFDJK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();


