import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAJEurwe-RBMb2_848t99T8igrD3aYRqkM",
    authDomain: "authentication-ab230.firebaseapp.com",
    projectId: "authentication-ab230",
    storageBucket: "authentication-ab230.appspot.com",
    messagingSenderId: "483784291788",
    appId: "1:483784291788:web:c9f7abda8ea8cf9aa5d969"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);