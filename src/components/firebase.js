import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsaRxbYRSVmtmRwOpxCMGfY5KekK3U3Jw",
  authDomain: "clone-47f7a.firebaseapp.com",
  projectId: "clone-47f7a",
  storageBucket: "clone-47f7a.appspot.com",
  messagingSenderId: "646828903959",
  appId: "1:646828903959:web:93f44a321b42202e891652",
  measurementId: "G-8V93T7PEKS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };