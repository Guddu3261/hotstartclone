import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAoJmkSD1qoG1vs4W6zb3WitmZ4XldhYtw",
  authDomain: "disneyclone-23fce.firebaseapp.com",
  projectId: "disneyclone-23fce",
  storageBucket: "disneyclone-23fce.appspot.com",
  messagingSenderId: "118894597228",
  appId: "1:118894597228:web:b269c9864b13a438de7449",
  measurementId: "G-TBNFES968Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;