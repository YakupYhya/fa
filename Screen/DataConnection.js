import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import {getfirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsA9EBrSbCRg-n_PFz08J_JHgziZtSiH4",
  authDomain: "fitnessapp-f2fa2.firebaseapp.com",
  projectId: "fitnessapp-f2fa2",
  storageBucket: "fitnessapp-f2fa2.appspot.com",
  messagingSenderId: "32045173210",
  appId: "1:32045173210:web:62470820297cc2f90518e3",
  measurementId: "G-29XDN3L1VM"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Veritabanı referansını al
const db = database();

export default db;
