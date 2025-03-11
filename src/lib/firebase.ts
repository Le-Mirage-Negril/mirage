// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM2lOF2WMmI262ezVONhZ9s7Rgs2unCZU",
  authDomain: "le-mirage-ea3d7.firebaseapp.com",
  projectId: "le-mirage-ea3d7",
  storageBucket: "le-mirage-ea3d7.firebasestorage.app",
  messagingSenderId: "408070971247",
  appId: "1:408070971247:web:f9a88a5dc96aaa25c4529a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
