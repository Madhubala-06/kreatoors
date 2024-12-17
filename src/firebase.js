import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB4SsJnPU8ONix3TVgKdwDlrOfr2BAYTpk",
    authDomain: "kreatoors-24af1.firebaseapp.com",
    projectId: "kreatoors-24af1",
    storageBucket: "kreatoors-24af1.firebasestorage.app",
    messagingSenderId: "807543643839",
    appId: "1:807543643839:web:5495e2d0b5ce7be3d7300a",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

storage._customHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};


export { db, storage, collection, addDoc, serverTimestamp };


