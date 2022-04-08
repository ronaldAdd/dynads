// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBn2XHvFxycP8-CAdoxiN1m4OSU2zh3oc",
  authDomain: "testing-213fd.firebaseapp.com",
  projectId: "testing-213fd",
  storageBucket: "testing-213fd.appspot.com",
  messagingSenderId: "114396122944",
  appId: "1:114396122944:web:be01820d3e6b1d636c74a5",
  measurementId: "G-7G1NKQ5BVM"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db}

