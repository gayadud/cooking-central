import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDFlaZ6vnxK52ZgqZNLrZ8lBxIWGoKZymo",
    authDomain: "cookingcentral-2019.firebaseapp.com",
    databaseURL: "https://cookingcentral-2019.firebaseio.com",
    projectId: "cookingcentral-2019",
    storageBucket: "gs://cookingcentral-2019.appspot.com/",
    messagingSenderId: "277338495741",
    appId: "1:277338495741:web:f61937f97a398791"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //initialize the firestore database
  firebase.firestore().settings({timestampsInSnapshots: true});

  const storage = firebase.storage();

  export {
    storage, firebase as default 
  }
