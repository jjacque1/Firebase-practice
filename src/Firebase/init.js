// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtBJg5oXEu889swMExTJDI3tw4z6URl4",
  authDomain: "library-website-3fe50.firebaseapp.com",
  projectId: "library-website-3fe50",
  storageBucket: "library-website-3fe50.appspot.com",
  messagingSenderId: "884177706631",
  appId: "1:884177706631:web:3891071ee6c31c1fb7a222",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db =  getFirestore();
