// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyAiqCHyOcEF_gMM17ojzM3xyDKu0ri8BNE",
   authDomain: "chef-recipe-hunter-clien-ef342.firebaseapp.com",
   projectId: "chef-recipe-hunter-clien-ef342",
   storageBucket: "chef-recipe-hunter-clien-ef342.appspot.com",
   messagingSenderId: "478889928245",
   appId: "1:478889928245:web:8991480223dc33e816b37c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;