import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBXcoJMZSUKsJmtPO9F-PDOkueIZgFUrXk",
    authDomain: "khalid-sre-firebase-practice.firebaseapp.com",
    projectId: "khalid-sre-firebase-practice",
    storageBucket: "khalid-sre-firebase-practice.firebasestorage.app",
    messagingSenderId: "668045544193",
    appId: "1:668045544193:web:93d6c8ded5e6c2dc582900"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app)