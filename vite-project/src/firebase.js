import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCpfGt9rAkX1jog7vysemiOo63NW52zYnw",
  authDomain: "assigment-3-85ec4.firebaseapp.com",
  projectId: "assigment-3-85ec4",
  storageBucket: "assigment-3-85ec4.firebasestorage.app",
  messagingSenderId: "499018309478",
  appId: "1:499018309478:web:de35f44a08c2a7751f32a7",                        // Replace with your app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;



