// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_lV4ftwpikx4wp4kYdwAGYS19_i-VGCc",
  authDomain: "netflixgpt-b3ef9.firebaseapp.com",
  projectId: "netflixgpt-b3ef9",
  storageBucket: "netflixgpt-b3ef9.firebasestorage.app",
  messagingSenderId: "873450329721",
  appId: "1:873450329721:web:cac81da39a10dfd6d766a8",
  measurementId: "G-WEQXN5DFDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth();