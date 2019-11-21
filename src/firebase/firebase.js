import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCUfxwRdQCoS3zSc4OFif2cCAOIjCeGSbg",
  authDomain: "shop-ba986.firebaseapp.com",
  databaseURL: "https://shop-ba986.firebaseio.com",
  projectId: "shop-ba986",
  storageBucket: "shop-ba986.appspot.com",
  messagingSenderId: "83907813063",
  appId: "1:83907813063:web:c9aa641ecd6aaf3ab4e8e2",
  measurementId: "G-BR54CSSP7G"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const SignInWithGoogle = () => firebase.auth().signInWithPopup(provider);

export default firebase;
