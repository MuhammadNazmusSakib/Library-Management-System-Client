// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9fG0hq-T1HkQGUgBQToEw_oeOYsXEPYs",
  authDomain: "library-management-syste-133af.firebaseapp.com",
  projectId: "library-management-syste-133af",
  storageBucket: "library-management-syste-133af.firebasestorage.app",
  messagingSenderId: "197883812307",
  appId: "1:197883812307:web:dbb8656bfddf0a5e027726"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();