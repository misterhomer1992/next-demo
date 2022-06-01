import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCbbSMvKlazDA3lvbcMmW-FOdEuHiFmd5U",
    authDomain: "next-demo-2c4ea.firebaseapp.com",
    databaseURL: "https://next-demo-2c4ea-default-rtdb.firebaseio.com",
    projectId: "next-demo-2c4ea",
    storageBucket: "next-demo-2c4ea.appspot.com",
    messagingSenderId: "133253165337",
    appId: "1:133253165337:web:4f332bd487db939a1b1588"
};

const app = initializeApp(firebaseConfig);
export const clientDatabase = getDatabase(app);

