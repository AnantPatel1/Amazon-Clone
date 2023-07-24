import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3YQKnmuv4AZOgQhGTJ5utmgVg4JzRMtw",
  authDomain: "clone-a92df.firebaseapp.com",
  projectId: "clone-a92df",
  storageBucket: "clone-a92df.appspot.com",
  messagingSenderId: "184689335339",
  appId: "1:184689335339:web:80920d4626f9880234de6e",
  measurementId: "G-HC0RZ9CZ2Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
