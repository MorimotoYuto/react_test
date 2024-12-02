import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0rns84Y56Z-0Qs7nePAK0kUzgd6RQ7s8",
  authDomain: "daidouta-99146.firebaseapp.com",
  databaseURL: "https://daidouta-99146-default-rtdb.firebaseio.com",
  projectId: "daidouta-99146",
  storageBucket: "daidouta-99146.firebasestorage.app",
  messagingSenderId: "637852693476",
  appId: "1:637852693476:web:3d4e731a02e88361f90df1",
  measurementId: "G-T2YHG9GE84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);
export default db;
