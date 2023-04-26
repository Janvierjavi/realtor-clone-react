// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPRUEpNnuoqlXysDlmn32REFp3bh5QixU",
  authDomain: "realtor-clone-project-aa547.firebaseapp.com",
  projectId: "realtor-clone-project-aa547",
  storageBucket: "realtor-clone-project-aa547.appspot.com",
  messagingSenderId: "615543773024",
  appId: "1:615543773024:web:0c92d4c220ee97dc1ef005",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
