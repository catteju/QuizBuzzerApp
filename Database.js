import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyAEq4J3YVx9FLK3ntyljqxZF_g1RCQFOO0",
  authDomain: "buzzer-app-cd406.firebaseapp.com",
  databaseURL: "https://buzzer-app-cd406-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-cd406",
  storageBucket: "buzzer-app-cd406.appspot.com",
  messagingSenderId: "868414031696",
  appId: "1:868414031696:web:700b6ce65466569aecce55",
  measurementId: "G-40MGL5VEEQ"
};
firebase.initializeApp(firebaseConfig);

export default firebase.database();