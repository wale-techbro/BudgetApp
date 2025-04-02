// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCaiODVNHbWIF1K0Kk08Udd2andVi3heOc",
    authDomain: "budgetapp-b592a.firebaseapp.com",
    projectId: "budgetapp-b592a",
    storageBucket: "budgetapp-b592a.firebasestorage.app",
    messagingSenderId: "899009356621",
    appId: "1:899009356621:web:abad8af37010fdc9f04d04",
    measurementId: "G-PZPY6HZLWF"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Make auth and firestore references
  const auth = firebase.auth();
  const db = firebase.firestore();