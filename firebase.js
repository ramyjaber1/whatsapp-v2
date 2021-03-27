import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmMiE_1gTHw3TF2s1X1t3IiG2Km4i9YE4",
    authDomain: "whatsapp-2-a15f1.firebaseapp.com",
    projectId: "whatsapp-2-a15f1",
    storageBucket: "whatsapp-2-a15f1.appspot.com",
    messagingSenderId: "289243715924",
    appId: "1:289243715924:web:c9762da46d6b00b1dc10c1",
    measurementId: "G-BBERH0H8B8"
  };

  const app = !firebase.apps.length 
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

  const db = app.firestore();
  const auth = app.auth();

  const provider = new firebase.auth.GoogleAuthProvider();


  export {db, auth, provider}