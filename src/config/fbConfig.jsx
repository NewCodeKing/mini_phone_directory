import firebase from "firebase";
var config = {
    apiKey: "AIzaSyCL0aAgH1ZflH97314ysUU-L7B5kYh4AyA",
    authDomain: "directory-e43e0.firebaseapp.com",
    databaseURL: "https://directory-e43e0.firebaseio.com",
    projectId: "directory-e43e0",
    storageBucket: "directory-e43e0.appspot.com",
    messagingSenderId: "294604208242"
  };
  firebase.initializeApp(config);

var fire = firebase.database();
export { fire };
