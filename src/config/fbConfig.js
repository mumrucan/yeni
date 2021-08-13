import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyCwM5NNAyrBqbXrqOVu5iRWjFjrvnMi0t8',
  authDomain: 'nightlife-4bb21.firebaseapp.com',
  projectId: 'nightlife-4bb21',
  storageBucket: 'nightlife-4bb21.appspot.com',
  messagingSenderId: '91797068749',
  appId: '1:91797068749:web:390cab4ed069a99e4d0284',
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
