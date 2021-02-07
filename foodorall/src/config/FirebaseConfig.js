import firebase from 'firebase';
import "firebase/firestore";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQMMlRE7a6poLZhhBiuCJDLnUsXz6ZRQk",
  authDomain: "food-for-all-7d863.firebaseapp.com",
  projectId: "food-for-all-7d863",
  storageBucket: "food-for-all-7d863.appspot.com",
  messagingSenderId: "1094021681081",
  appId: "1:1094021681081:web:88dba65bf59f0326c4b068",
  measurementId: "G-1K8FDTKFRL"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default firebase;