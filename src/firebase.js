import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {getStorage} from 'firebase/storage';
import {getAuth} from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
    apiKey: "AIzaSyC5O1oyDtnWiQ_3ULQoP0g0m_sw12llTcU",
    authDomain: "cart1-44c4a.firebaseapp.com",
    projectId: "cart1-44c4a",
    storageBucket: "cart1-44c4a.appspot.com",
    messagingSenderId: "339368789969",
    appId: "1:339368789969:web:1068170e603d226c69c2f0"
  };
  

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = firebase.firestore();

export const storage = getStorage();

export const auth = getAuth();