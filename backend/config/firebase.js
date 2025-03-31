const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyCQwFJGSMxdola8dkF541pMBqQrEfODevQ",
    authDomain: "syla-e386d.firebaseapp.com",
    projectId: "syla-e386d",
    storageBucket: "syla-e386d.firebasestorage.app",
    messagingSenderId: "315395233596",
    appId: "1:315395233596:web:7cb0ea4d3a411e2dabb039",
    measurementId: "G-S9BZXVXLMP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = { db }; 