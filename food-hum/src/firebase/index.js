import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDmgSliPf1_cJoMc-jaNrr1KeR3T9DRpHc",
    authDomain: "foodhum-c9c70.firebaseapp.com",
    databaseURL: "https://foodhum-c9c70.firebaseio.com",
    projectId: "foodhum-c9c70",
    storageBucket: "foodhum-c9c70.appspot.com",
    messagingSenderId: "48347521959"
};
firebase.initializeApp(config);

export var firebaseRef = firebase.database().ref();
export default firebase;