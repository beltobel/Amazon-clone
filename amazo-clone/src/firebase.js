// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrORbIU0OR7AXxdP_NwhW5uTdQ4sMn4Tw",
  authDomain: "clone-5bd7f.firebaseapp.com",
  projectId: "clone-5bd7f",
  storageBucket: "clone-5bd7f.appspot.com",
  messagingSenderId: "99988142478",
  appId: "1:99988142478:web:1da40c6396b4f8946c4cdf",
  measurementId: "G-SN486EQHZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };
