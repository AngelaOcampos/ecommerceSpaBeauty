// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9pGSggfjuTNuseW1tipodZngyqdTwPU",
  authDomain: "ecommercebeauty-3ae03.firebaseapp.com",
  projectId: "ecommercebeauty-3ae03",
  storageBucket: "ecommercebeauty-3ae03.appspot.com",
  messagingSenderId: "188197460626",
  appId: "1:188197460626:web:cfc05fdea3032c6e25244b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//base de datos
export const db = getFirestore(app)