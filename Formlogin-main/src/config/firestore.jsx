// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // Импортируем модуль Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ0RN6IbOcO8X2Wdgd_9ez-pvR-Zeqk2k",
  authDomain: "projeckt-c5364.firebaseapp.com",
  projectId: "projeckt-c5364",
  storageBucket: "projeckt-c5364.appspot.com",
  messagingSenderId: "529582495436",
  appId: "1:529582495436:web:8fe10ec7ad38cd65635469"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Initialize Firestore


export default firestore;
