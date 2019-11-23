import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAEDBSyzAuGQdAUmhc-WGMtNgqNwnIfuRA",
  authDomain: "crwn-db-fdcf5.firebaseapp.com",
  databaseURL: "https://crwn-db-fdcf5.firebaseio.com",
  projectId: "crwn-db-fdcf5",
  storageBucket: "crwn-db-fdcf5.appspot.com",
  messagingSenderId: "629689082649",
  appId: "1:629689082649:web:240802f308f84818689b88",
  measurementId: "G-7KKPVT8K2F"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
