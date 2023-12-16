// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCdS1ZQJPScVs8AU9HfrDsE9SJ_xCXdy0c",
    authDomain: "cric-app-49259.firebaseapp.com",
    projectId: "cric-app-49259",
    storageBucket: "cric-app-49259.appspot.com",
    messagingSenderId: "532498584736",
    appId: "1:532498584736:web:59bff92eba81b5569865c5",
    measurementId: "G-L1Y9LSQ6PZ",
    userProfile: 'users'
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});
  const db = firebaseApp.firestore();

  export default db;  
  