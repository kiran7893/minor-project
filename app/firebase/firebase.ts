import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB34Y8klwrvHIWX6wB364hNaKb2ijJaWaw",
  authDomain: "minor-28d4a.firebaseapp.com",
  projectId: "minor-28d4a",
  storageBucket: "minor-28d4a.appspot.com",
  messagingSenderId: "460962966318",
  appId: "1:460962966318:web:db87c5b3eb40dd95c068bf",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, firestore, app };
