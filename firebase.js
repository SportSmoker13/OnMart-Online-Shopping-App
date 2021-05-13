import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyBFGRO8VMn87RwvcflW91MldB9l-bBvVxY",
  authDomain: "onmart-8aa67.firebaseapp.com",
  projectId: "onmart-8aa67",
  storageBucket: "onmart-8aa67.appspot.com",
  messagingSenderId: "26095116950",
  appId: "1:26095116950:web:6a3f5865b1114029e418b7",
  measurementId: "G-04Y7HC59WX"
};

let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app(); 
}

const db = firebase.app();
const auth = firebase.auth();
export { db, auth };