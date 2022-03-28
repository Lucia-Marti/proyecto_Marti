// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQFjYFG-xH0rzWYkINnZ8xxOr0tYJiqP8",
  authDomain: "proyectomarti.firebaseapp.com",
  projectId: "proyectomarti",
  storageBucket: "proyectomarti.appspot.com",
  messagingSenderId: "940168558596",
  appId: "1:940168558596:web:c1c08da35c07de32445d51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

