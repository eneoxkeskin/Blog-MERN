// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d648c.firebaseapp.com",
  projectId: "mern-blog-d648c",
  storageBucket: "mern-blog-d648c.appspot.com",
  messagingSenderId: "924864947505",
  appId: "1:924864947505:web:81e1a51893c715562b3c10"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
