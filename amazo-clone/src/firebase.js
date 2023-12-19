// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = firebase.auth();
const db = app.firestore(app);
export { auth, db };
