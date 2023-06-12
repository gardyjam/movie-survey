import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDo6rTK-IfNmWkbq493vCwcei206kb4sDA",
  authDomain: "movie-survey-c6ed6.firebaseapp.com",
  databaseURL: "https://movie-survey-c6ed6-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "movie-survey-c6ed6",
  storageBucket: "movie-survey-c6ed6.appspot.com",
  messagingSenderId: "309672593814",
  appId: "1:309672593814:web:3a827957ac5937828575b7",
  measurementId: "G-HPY5DMWP6P"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};