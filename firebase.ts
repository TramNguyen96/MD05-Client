import { initializeApp } from "firebase/app";

/* Google Auth */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/* thay config thành config của bạn */
const firebaseConfig = {
  apiKey: "AIzaSyAndetqmt474VMsWg9ZB5QLWjymvfCHWaA",
  authDomain: "md05-nestjs.firebaseapp.com",
  projectId: "md05-nestjs",
  storageBucket: "md05-nestjs.appspot.com",
  messagingSenderId: "1080583278013",
  appId: "1:1080583278013:web:f99c904775caf43ae5d6d4",
  measurementId: "G-BJ9LGVM87E"
  };
const app = initializeApp(firebaseConfig);

/* Google Auth Import */
const googleProvider = new GoogleAuthProvider();
export async function googleLogin() {
    let auth = getAuth(app);
    return await signInWithPopup(auth, googleProvider)
}