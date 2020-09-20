import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB54N3eaVGmBdRJ5SnqEMtK-B4EIaN8lLA",
  authDomain: "data-pratice.firebaseapp.com",
  databaseURL: "https://data-pratice.firebaseio.com",
  projectId: "data-pratice",
  storageBucket: "data-pratice.appspot.com",
  messagingSenderId: "430599917806",
  appId: "1:430599917806:web:c9552b038f8e3ba2da23ff",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
