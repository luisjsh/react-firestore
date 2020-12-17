import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

let firebaseConfig = {
  apiKey: "AIzaSyDCV3-B0GY4MV60jpEdtSJn1hA1PZrd_nk",
  authDomain: "finances-e7649.firebaseapp.com",
  projectId: "finances-e7649",
  storageBucket: "finances-e7649.appspot.com",
  messagingSenderId: "132941881571",
  appId: "1:132941881571:web:9f1b4a7366f5b647eae5d6",
  measurementId: "G-RL8W4M8LTY"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()  
export let db = firebase.firestore()
