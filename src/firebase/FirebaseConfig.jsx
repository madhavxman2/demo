// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHU-uXaOkXXOuWc00vEjkc7jVvtzyne1o",
  authDomain: "shoppingcart-49d70.firebaseapp.com",
  projectId: "shoppingcart-49d70",
  storageBucket: "shoppingcart-49d70.appspot.com",
  messagingSenderId: "1045611635599",
  appId: "1:1045611635599:web:cd2f72817d6aeffd5921fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB=getFirestore(app);
const auth=getAuth(app);

export {fireDB,auth};