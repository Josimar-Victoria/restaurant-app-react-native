import { initializeApp } from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAzI597OE2I2CfgJxSq_rcoon0I83JpDqs",
  authDomain: "reastauran-native.firebaseapp.com",
  projectId: "reastauran-native",
  storageBucket: "reastauran-native.appspot.com",
  messagingSenderId: "118158455292",
  appId: "1:118158455292:web:a998bcacc2066365f64279"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);