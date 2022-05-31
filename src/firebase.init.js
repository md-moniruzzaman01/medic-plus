// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkuTmbw37QhFyjEow1Jv1yGeZGxaWGMrA",
  authDomain: "medica-plus-27cb5.firebaseapp.com",
  projectId: "medica-plus-27cb5",
  storageBucket: "medica-plus-27cb5.appspot.com",
  messagingSenderId: "900260801782",
  appId: "1:900260801782:web:73fcccb5cf0cbf5df510d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;