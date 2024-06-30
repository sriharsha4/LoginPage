// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGhCss4kE8hNbyqQdzsvloJNFDCj9Ui48",
  authDomain: "authentication-d652c.firebaseapp.com",
  projectId: "authentication-d652c",
  storageBucket: "authentication-d652c.appspot.com",
  messagingSenderId: "1007732495695",
  appId: "1:1007732495695:web:2f1f2efb86ce7b9470a13a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {auth};