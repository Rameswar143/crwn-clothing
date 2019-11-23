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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
