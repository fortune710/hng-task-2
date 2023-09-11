const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore')


const firebaseConfig = {
  apiKey: "AIzaSyDjbrudk1V1Tx8_38NMos2zCi7lx1pzqQ8",
  authDomain: "weather-app-1612.firebaseapp.com",
  projectId: "weather-app-1612",
  storageBucket: "weather-app-1612.appspot.com",
  messagingSenderId: "501895102754",
  appId: "1:501895102754:web:ed6990118bfdc4a0a3257b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

module.exports = { database }