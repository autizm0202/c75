import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA3oR70vVGNqJhJwC9ITqM6ukMvsi0gckc",
  authDomain: "cc71-ab965.firebaseapp.com",
  projectId: "cc71-ab965",
  storageBucket: "cc71-ab965.appspot.com",
  messagingSenderId: "228435042184",
  appId: "1:228435042184:web:e7c7b98e17232636e6643d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
