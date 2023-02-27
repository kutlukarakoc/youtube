// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvVTuIF8GpcET4O1YKmzFRDwpITzcFssg",
  authDomain: "clone-379016.firebaseapp.com",
  projectId: "youtube-clone-379016",
  storageBucket: "youtube-clone-379016.appspot.com",
  messagingSenderId: "507567852469",
  appId: "1:507567852469:web:c79afbb97b289f8c69e7fc",
  measurementId: "G-288NW66LH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);