import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQFjYFG-xH0rzWYkINnZ8xxOr0tYJiqP8",
  authDomain: "proyectomarti.firebaseapp.com",
  projectId: "proyectomarti",
  storageBucket: "proyectomarti.appspot.com",
  messagingSenderId: "940168558596",
  appId: "1:940168558596:web:c1c08da35c07de32445d51"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

