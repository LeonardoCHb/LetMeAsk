import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAVSUT-sNrSWNmHgYkIBRz5jYxRdbwI4tQ",
  authDomain: "letmeask-e45da.firebaseapp.com",
  databaseURL: "https://letmeask-e45da-default-rtdb.firebaseio.com",
  projectId: "letmeask-e45da",
  storageBucket: "letmeask-e45da.appspot.com",
  messagingSenderId: "959474801480",
  appId: "1:959474801480:web:cb32f4c05c8aca4cfcb17d"
};


firebase.initializeApp(firebaseConfig)

const auth= firebase.auth()
const database = firebase.database()

export {firebase, auth, database}