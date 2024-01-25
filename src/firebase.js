// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "alternativesolutionsdigitals.firebaseapp.com",
  projectId: "alternativesolutionsdigitals",
  storageBucket: "alternativesolutionsdigitals.appspot.com",
  messagingSenderId: "1000741881780",
  appId: "1:1000741881780:web:1689db6ea980d1fef054e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();