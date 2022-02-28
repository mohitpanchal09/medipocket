import firebase from './firebase';
import 'firebase/storage';
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyBoR3RzI7hM0UCSt1AJ7EXT9xEfafIZ_ps",
   authDomain: "medipocketalbum.firebaseapp.com",
   projectId: "medipocketalbum",
   storageBucket: "medipocketalbum.appspot.com",
   messagingSenderId: "88465123850",
   appId: "1:88465123850:web:4552b2198152d810d3cdf3"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const storage = firebase.storage();

 export {
     storage,firebase as default
 }