import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const fireBaseConfig = {
  apiKey: "AIzaSyC-gxQytPMKTFD7MQz5mygQtZQir6y82Ck",
  authDomain: "sakshamfs.firebaseapp.com",
  projectId: "sakshamfs",
  storageBucket: "sakshamfs.firebasestorage.app",
  messagingSenderId: "358302328257",
  appId: "1:358302328257:web:dc164953865477362abb40",
  measurementId: "G-DJHMYQR1V4"
}

const app = initializeApp(fireBaseConfig);
const db = getFirestore(app);

export default db;