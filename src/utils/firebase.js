// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDV9SJJQvh9_ZSEYqvwNlrk31SJYZJRK5g",
  authDomain: "netflix-gpt-85d3b.firebaseapp.com",
  projectId: "netflix-gpt-85d3b",
  storageBucket: "netflix-gpt-85d3b.appspot.com",
  messagingSenderId: "759438352343",
  appId: "1:759438352343:web:a1d5269b4c1d5c489c7592",
  measurementId: "G-PXSHLTWYDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {
  app,
  analytics,
  auth
}