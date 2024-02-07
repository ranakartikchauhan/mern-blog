// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log(import.meta.env.VITE_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: 'AIzaSyCzvLKLzzuJTcVI9Pyt4fLLkV8UNUbEG4I',
  authDomain: "blog-app-b8ae0.firebaseapp.com",
  projectId: "blog-app-b8ae0",
  storageBucket: "blog-app-b8ae0.appspot.com",
  messagingSenderId: "1049717035169",
  appId: "1:1049717035169:web:7d8df1c7eb9fcb37e460e0",
  measurementId: "G-K64QM9XVHE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
