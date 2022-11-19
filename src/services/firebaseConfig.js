import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBsXgIW0Dll7Ven_AtKVWrLz0UiOd1VOkg",
    authDomain: "cineclube-b2598.firebaseapp.com",
    projectId: "cineclube-b2598",
    storageBucket: "cineclube-b2598.appspot.com",
    messagingSenderId: "222857155780",
    appId: "1:222857155780:web:d36d5f1f1649e5200e2591",
    measurementId: "G-DRQDG1PK9J"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)
