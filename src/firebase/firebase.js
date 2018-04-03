import * as firebase from "firebase";
require("firebase/firestore");

const config = {
  apiKey: "AIzaSyC9GPnPVP6RCMse2DTAzTtRLi7lbKHDMTs",
  authDomain: "scandifit-app.firebaseapp.com",
  databaseURL: "https://scandifit-app.firebaseio.com",
  projectId: "scandifit-app",
  storageBucket: "",
  messagingSenderId: "568838658774"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
