import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//firebase
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAKy9IGpJ2Thbm1EtaCUZ8jtEvG5B1fWqA",
  authDomain: "proyectofinalreactureta.firebaseapp.com",
  projectId: "proyectofinalreactureta",
  storageBucket: "proyectofinalreactureta.appspot.com",
  messagingSenderId: "662244242040",
  appId: "1:662244242040:web:8a525b6dbe2777ebabf38d"
}; 

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
