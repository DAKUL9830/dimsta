// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';




const firebaseApp = firebase.initializeApp({



  
    apiKey: "AIzaSyDdx0y932gQAgHradtc0PdZgSHthcCxGMY",
    authDomain: "dimsta-a7cec.firebaseapp.com",
    projectId: "dimsta-a7cec",
    storageBucket: "dimsta-a7cec.appspot.com",
    messagingSenderId: "693010839702",
    appId: "1:693010839702:web:d2bd77092800b6b9e92ab7",
    measurementId: "G-LZJYG4E997"
  });
 const db=firebaseApp.firestore();
 const auth=firebase.auth();
 const storage=firebase.storage();
  

 export {db,auth,storage}