// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP1eO08Elf0vBQaj8-CjtIQ80y9prSLQo",
  authDomain: "chrome-extension-cc82d.firebaseapp.com",
  projectId: "chrome-extension-cc82d",
  storageBucket: "chrome-extension-cc82d.appspot.com",
  messagingSenderId: "675147345608",
  appId: "1:675147345608:web:cfaa24166f8b9fdc8efffd",
  measurementId: "G-H0NPLZKTEF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
