// Firebase configuration for LinkDock
const firebaseConfig = {
  apiKey: "AIzaSyDwC41oCD2wRbe1GRSzPu8aFDZ_D1G89c4",
  authDomain: "open-drive-hub.firebaseapp.com",
  projectId: "open-drive-hub",
  storageBucket: "open-drive-hub.firebasestorage.app",
  messagingSenderId: "736192571011",
  appId: "1:736192571011:web:71b692ce2ed54ab83fddb6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();
