// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxzdzKCqLmgW-1pnhwqkT9HBG81xUf1Ak",
  authDomain: "chat-log-2baa1.firebaseapp.com",
  projectId: "chat-log-2baa1",
  storageBucket: "chat-log-2baa1.appspot.com",
  messagingSenderId: "20931096230",
  appId: "1:20931096230:web:05b6b006581220822b8e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmeyi aktif etme
export const auth = getAuth(app);

// google ile yetkilendirme
export const provider = new GoogleAuthProvider();

// veritabanıyla aradaki bağlantıyı sağlar
export const db = getFirestore(app);