import firebase from 'firebase/app'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyB2y1z5OcOVUaIT-FoN4WUdUFZYrnK5a7U",
    authDomain: "fir-prueba-25fff.firebaseapp.com",
    databaseURL: "https://fir-prueba-25fff.firebaseio.com",
    projectId: "fir-prueba-25fff",
    storageBucket: "fir-prueba-25fff.appspot.com",
    messagingSenderId: "752906685727",
    appId: "1:752906685727:web:31576e5481978a5c72b42a"
  };
  // Initialize Firebase
  
const firebaseApp =  firebase.initializeApp(firebaseConfig);
firebaseApp.firestore()
export default firebaseApp.firestore()
