// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-website-ef3c2.firebaseapp.com",
  projectId: "mern-blog-website-ef3c2",
  storageBucket: "mern-blog-website-ef3c2.appspot.com",
  messagingSenderId: "207689756297",
  appId: "1:207689756297:web:19e2584ebd315fb8a1a058"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

