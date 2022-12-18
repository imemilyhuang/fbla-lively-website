import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// My Config
const firebaseConfig = {
    apiKey: "AIzaSyDrx0jYB-7SCcMoQCVyzzhikSXhJrwCBHQ",
    authDomain: "lively-planner.firebaseapp.com",
    projectId: "lively-planner",
    storageBucket: "lively-planner.appspot.com",
    messagingSenderId: "414962397489",
    appId: "1:414962397489:web:d42e1cd259c744c7de0010",
    measurementId: "G-3HJGWQDK86"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app)

const auth = getAuth(app)

export { auth, db }