
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBUz9TpgH9Sh_Q858sVZ6cGPIRJ4C8oOLQ",
  authDomain: "coder-react-6295a.firebaseapp.com",
  projectId: "coder-react-6295a",
  storageBucket: "coder-react-6295a.appspot.com",
  messagingSenderId: "1017315309588",
  appId: "1:1017315309588:web:774ee5ee98380a14c8cf01"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);