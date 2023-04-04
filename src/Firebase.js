// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//  ......
// paste your Config here
// };
const firebaseConfig = {
    apiKey: "AIzaSyCAgu9Bgwx-3toDyvFpKcSsSgX6msmZFE0",
    authDomain: "webonline-af4c7.firebaseapp.com",
    projectId: "webonline-af4c7",
    storageBucket: "webonline-af4c7.appspot.com",
    messagingSenderId: "43756249432",
    appId: "1:43756249432:web:f786b0b7062f6361cf052d",
    measurementId: "G-TB36PKE4ND"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export default db;
