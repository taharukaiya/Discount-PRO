// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeiPXaxYcnDx2QDDkK8LsNLozGGC4Kc0Y",
  authDomain: "discount-pro-54b5b.firebaseapp.com",
  projectId: "discount-pro-54b5b",
  storageBucket: "discount-pro-54b5b.firebasestorage.app",
  messagingSenderId: "382282786218",
  appId: "1:382282786218:web:b34338d2011e9b03f3f7d3",
  measurementId: "G-C11QFLWSQK",

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  // measurementId: import.meta.env.VITE_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
