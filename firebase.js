// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATjwY-wRifH4NS_0pOdCLUER5GN6oHYsk",
  authDomain: "the-belvane-co.firebaseapp.com",
  projectId: "the-belvane-co",
  storageBucket: "the-belvane-co.firebasestorage.app",
  messagingSenderId: "96200437090",
  appId: "1:96200437090:web:037fcdcd6a92203ec5103b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Make them available to other scripts
window.auth = auth;
window.googleProvider = googleProvider;

window.firebaseAuth = {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
