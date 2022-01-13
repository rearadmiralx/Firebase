// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApN_UInVP2mV0jKbsdAeRPUCXDYPZuCwU",
  authDomain: "iot-aeroponics.firebaseapp.com",
  databaseURL: "https://iot-aeroponics-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iot-aeroponics",
  storageBucket: "iot-aeroponics.appspot.com",
  messagingSenderId: "685018331718",
  appId: "1:685018331718:web:cdb49e6a4d29a2f2372847",
  measurementId: "G-WCYJ0TPNEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



