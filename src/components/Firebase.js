import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCain6eO1pyGZkJJeM9_wywvmN200v6K8A",
  authDomain: "loginauth-b530c.firebaseapp.com",
  projectId: "loginauth-b530c",
  storageBucket: "loginauth-b530c.firebasestorage.app",
  messagingSenderId: "334311968549",
  appId: "1:334311968549:web:040b7fb236b164c44f54cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);