import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

  apiKey: "AIzaSyBxCWqPNX5p16RID2lVCC9frCvy96vcz8g",

  authDomain: "healthcare-9120c.firebaseapp.com",

  projectId: "healthcare-9120c",

  storageBucket: "healthcare-9120c.appspot.com",

  messagingSenderId: "168914937509",

  appId: "1:168914937509:web:4862385781afdd3afecf4c",

  measurementId: "G-W4T1CVTYKN"

};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);

// Firebase Objects

const auth = firebase.auth(app);
const storage = firebase.storage(app);
const database = firebase.firestore(app);

// Exporting Firebase Objects

export { app, auth, database, storage }