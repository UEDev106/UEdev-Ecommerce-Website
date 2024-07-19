// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWk4aidknABHNPuVrBFKUaKeJpe6MF2Co",
  authDomain: "ali-ecommerce-72bda.firebaseapp.com",
  projectId: "ali-ecommerce-72bda",
  storageBucket: "ali-ecommerce-72bda.appspot.com",
  messagingSenderId: "830619200051",
  appId: "1:830619200051:web:f7ffce58816492fa941146"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth}