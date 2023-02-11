import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBD0ERFunxviMVU7InqlV4cxPPg3bEd4Ew",
  authDomain: "shopping-list-app-d485a.firebaseapp.com",
  projectId: "shopping-list-app-d485a",
  storageBucket: "shopping-list-app-d485a.appspot.com",
  messagingSenderId: "835114057272",
  appId: "1:835114057272:web:a7b890fa39fae5461f70cd",
  databaseURL:
    "https://shopping-list-app-d485a-default-rtdb.europe-west1.firebasedatabase.app/",
};

const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase);

export { firebase, database };
