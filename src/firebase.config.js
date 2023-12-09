// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe0EeklC26nnpupB1Yok10O3ik1YW-1qs",
  authDomain: "dmart-bce37.firebaseapp.com",
  projectId: "dmart-bce37",
  storageBucket: "dmart-bce37.appspot.com",
  messagingSenderId: "759617977787",
  appId: "1:759617977787:web:f38a24a0edfac83adf989e",
  measurementId: "G-R2BQ5J03PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics()

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app