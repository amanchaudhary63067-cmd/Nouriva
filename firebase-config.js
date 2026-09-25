import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import { getFirestore } from
"https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBA6eBBT30P1q79cRZfFRFVGC...",

    authDomain: "nouriva-f4d46.firebaseapp.com",

    projectId: "nouriva-f4d46",

    storageBucket: "nouriva-f4d46.firebasestorage.app",

    messagingSenderId: "359922533027",

    appId: "1:359922533027:web:1e735f66237e36c169f516"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


export {
    app,
    auth,
    db
};