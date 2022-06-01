import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";
import {firebaseConfig} from "../private/firebase/const";

const app = initializeApp(firebaseConfig);
export const clientDatabase = getDatabase(app);

