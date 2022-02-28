import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfwPpgKNd-cvlWG9lDzBTQHLuhS4rw2ms",
  authDomain: "naturespace-a2565.firebaseapp.com",
  projectId: "naturespace-a2565",
  storageBucket: "naturespace-a2565.appspot.com",
  messagingSenderId: "314884465727",
  appId: "1:314884465727:web:c06491bbe9ad22047ec48a",
  measurementId: "G-FTVH3PLP9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
