import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHR3MHl3hSvnS0g75IhfM2Xy45MXJ3tq0",
  authDomain: "eventoscreate-dce78.firebaseapp.com",
  databaseURL: "https://eventoscreate-dce78.firebaseio.com",
  projectId: "eventoscreate-dce78",
  storageBucket: "eventoscreate-dce78.appspot.com",
  messagingSenderId: "688178023577",
  appId: "1:688178023577:web:a8623a4ba57e2c8c783c08"
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);