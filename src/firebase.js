// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvXR6SUJa7rZXvxwPoHORZvdRfPvdwAs",
  authDomain: "chat-app-2e0c3.firebaseapp.com",
  projectId: "chat-app-2e0c3",
  storageBucket: "chat-app-2e0c3.appspot.com",
  messagingSenderId: "986390377049",
  appId: "1:986390377049:web:da50368ee4b4e9d8103748"
};  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();