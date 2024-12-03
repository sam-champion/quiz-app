import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5uEnyHJeVrrkoAMYn0eq8tCz7QFfoHdM",
  authDomain: "quiz-app-51b89.firebaseapp.com",
  projectId: "quiz-app-51b89",
  storageBucket: "quiz-app-51b89.firebasestorage.app",
  messagingSenderId: "492123724078",
  appId: "1:492123724078:web:04c6f0805c65d43c4f02bf",
  measurementId: "G-E3MXGPTX94",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
