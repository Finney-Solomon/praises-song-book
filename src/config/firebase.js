// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6_ESzDsC21jyFHRHtDCvq5UQWn5dwpe8",
  authDomain: "solo-owuuwj.firebaseapp.com",
  databaseURL: "https://solo-owuuwj.firebaseio.com",
  projectId: "solo-owuuwj",
  storageBucket: "solo-owuuwj.appspot.com",
  messagingSenderId: "701021426526",
  appId: "1:701021426526:web:bbec7761cc8dbb75a5b5cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app);
export const googleProvider= new GoogleAuthProvider();
export const db = getFirestore()
