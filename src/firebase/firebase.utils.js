// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBInfFNIcaqQeqByvjet_iGKLBeWIqJJF4",
  authDomain: "task-countdown-react.firebaseapp.com",
  projectId: "task-countdown-react",
  storageBucket: "task-countdown-react.appspot.com",
  messagingSenderId: "881258129536",
  appId: "1:881258129536:web:9ca84f6c1eb83580685e65",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
