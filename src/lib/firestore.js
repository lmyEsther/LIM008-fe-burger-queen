import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyDhvyJSJq27t6RbSd_ws48NDN3z5QT-NsQ',
  authDomain: 'burger-queen-6a957.firebaseapp.com',
  databaseURL: 'https://burger-queen-6a957.firebaseio.com',
  projectId: 'burger-queen-6a957',
  storageBucket: 'burger-queen-6a957.appspot.com',
  messagingSenderId: '925171568805',
};

firebase.initializeApp(config);

const db = firebase.firestore;

export default db;
