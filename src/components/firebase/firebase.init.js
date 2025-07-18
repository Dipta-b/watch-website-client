// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnsoyEzJN5C5UHGkpvDtqPshxs0vLqjEs",
    authDomain: "watch-website-a5c0a.firebaseapp.com",
    projectId: "watch-website-a5c0a",
    storageBucket: "watch-website-a5c0a.firebasestorage.app",
    messagingSenderId: "46479611762",
    appId: "1:46479611762:web:603bbf7c7c43903c38afeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;