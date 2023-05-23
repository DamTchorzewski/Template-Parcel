

const firebase = require('firebase');
firebaseConfig = {
  apiKey: "AIzaSyDFS2y0Up65supUf5pdwkR9lj-bvdxbfX0",
  authDomain: "parcele-project.firebaseapp.com",
  projectId: "parcele-project",
  storageBucket: "parcele-project.appspot.com",
  messagingSenderId: "78989335411",
  appId: "1:78989335411:web:b51b9f04df70721feac306",
  measurementId: "G-69LKCKLNV6"
};
firebase.initializeAoo(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = Users;