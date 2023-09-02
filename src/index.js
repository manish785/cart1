import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import * as firebase from 'firebase';
// import 'firebase/firestore';
import { initializeApp } from "firebase/app";


const root = ReactDOM.createRoot(document.getElementById('root'));

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5O1oyDtnWiQ_3ULQoP0g0m_sw12llTcU",
  authDomain: "cart1-44c4a.firebaseapp.com",
  projectId: "cart1-44c4a",
  storageBucket: "cart1-44c4a.appspot.com",
  messagingSenderId: "339368789969",
  appId: "1:339368789969:web:1068170e603d226c69c2f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

