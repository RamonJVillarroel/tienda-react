
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAlbzD2YVfWbqzntxxRGiw3DLO4_t7OcRM",
  authDomain: "la-tienda-villarroel.firebaseapp.com",
  databaseURL: "https://la-tienda-villarroel-default-rtdb.firebaseio.com",
  projectId: "la-tienda-villarroel",
  storageBucket: "la-tienda-villarroel.appspot.com",
  messagingSenderId: "340351821049",
  appId: "1:340351821049:web:ac49c0ee47f3e961132e28"
};

const app = initializeApp(firebaseConfig);
export const bd = getFirestore(app);