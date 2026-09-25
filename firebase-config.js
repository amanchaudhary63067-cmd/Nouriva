import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBA6eBBT30P1q79cRZfFRFVGCEaDcM5Xfk",
    authDomain: "nouriva-f4d46.firebaseapp.com",
    projectId: "nouriva-f4d46",
    storageBucket: "nouriva-f4d46.firebasestorage.app",
    messagingSenderId: "359922533027",
    appId: "1:359922533027:web:1e735f66237e36c169f516",
    measurementId: "G-Z12HG4GSPX"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Authentication
const auth = getAuth(app);


// Firestore Database
const db = getFirestore(app);


// Export
export {
    app,
    auth,
    db
};
