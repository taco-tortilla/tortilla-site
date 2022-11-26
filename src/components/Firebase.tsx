// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfKLqCD0iYYFHbxkgubira4Q5srwcExuk",
  authDomain: "portfolio-tortilla.firebaseapp.com",
  projectId: "portfolio-tortilla",
  storageBucket: "portfolio-tortilla.appspot.com",
  messagingSenderId: "488528143731",
  appId: "1:488528143731:web:29ff5a675ff7ddcee69106",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
