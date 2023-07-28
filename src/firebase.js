import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "spotify-clone-11e8f.firebaseapp.com",
  projectId: "spotify-clone-11e8f",
  storageBucket: "spotify-clone-11e8f.appspot.com",
  messagingSenderId: "553235430136",
  appId: "1:553235430136:web:940f432a76ef8b8790d90d",
  measurementId: "G-S2TGHPMY1T"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const provider=new GoogleAuthProvider();

export default app;
