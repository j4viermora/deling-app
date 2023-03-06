// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO move to env file
const firebaseConfig = {
  apiKey: "AIzaSyD1REjLzVEha9LU9KLvvNiPu4FKx96BZPA",
  authDomain: "deling-menu-7fe7f.firebaseapp.com",
  projectId: "deling-menu-7fe7f",
  storageBucket: "deling-menu-7fe7f.appspot.com",
  messagingSenderId: "10024011638",
  appId: "1:10024011638:web:46b7caa51fe7de3c8edc57",
};

!getApps().length && initializeApp(firebaseConfig);

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
