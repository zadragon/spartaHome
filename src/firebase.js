import firebase from "firebase/app";
import "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyBbi0SnMB-uHITVAKGyqJ_Ahk2VPKRM4jg",
    authDomain: "friend-test-852c2.firebaseapp.com",
    projectId: "friend-test-852c2",
    storageBucket: "friend-test-852c2.appspot.com",
    messagingSenderId: "1090260029261",
    appId: "1:1090260029261:web:e8fee0137d590e5c357104",
    measurementId: "G-HVDMMFRC1H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export { firestore };