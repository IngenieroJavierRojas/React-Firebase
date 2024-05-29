// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAGCfLwenjzkcas6TDptdTeb2OLB3XubCQ",
    authDomain: "formulario-aed3c.firebaseapp.com",
    projectId: "formulario-aed3c",
    storageBucket: "formulario-aed3c.appspot.com",
    messagingSenderId: "414812948107",
    appId: "1:414812948107:web:19361ce60a8dc23820768e",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
