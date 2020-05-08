import firebase from "firebase";

const config = {
    apiKey: "AIzaSyBHAdGGhxCBBZzImdKIWhKRZf1U-9we4oc",
    authDomain: "saled-b6960.firebaseapp.com",
    databaseURL: "https://saled-b6960.firebaseio.com",
    projectId: "saled-b6960",
    storageBucket: "saled-b6960.appspot.com",
    messagingSenderId: "373362921865",
    appId: "1:373362921865:web:581d8bf7868b3195bf9158",
    measurementId: "G-BHRK81ZXW9"
};

firebase.initializeApp(config);

export default firebase;