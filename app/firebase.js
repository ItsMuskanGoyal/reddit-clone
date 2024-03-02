// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9yZhFxX3kZrRoQUGRcJB8QVkn22ovKUI",
  authDomain: "dduc-86a01.firebaseapp.com",
  projectId: "dduc-86a01",
  storageBucket: "dduc-86a01.appspot.com",
  messagingSenderId: "164404118898",
  appId: "1:164404118898:web:c951a4f27feea39e2289eb",
  measurementId: "G-QF3VT72TB5",
  databaseURL: "https://dduc-86a01-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;