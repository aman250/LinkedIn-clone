import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAKedMsckRGrpnyNMad-1SGt2ou90KU8Ik",
  authDomain: "linkedin-clone-d4654.firebaseapp.com",
  projectId: "linkedin-clone-d4654",
  storageBucket: "linkedin-clone-d4654.appspot.com",
  messagingSenderId: "785656395983",
  appId: "1:785656395983:web:99a5ad150af5df54635fba",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
