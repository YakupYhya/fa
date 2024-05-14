import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDsA9EBrSbCRg-n_PFz08J_JHgziZtSiH4",
  authDomain: "fitnessapp-f2fa2.firebaseapp.com",
  projectId: "fitnessapp-f2fa2",
  storageBucket: "fitnessapp-f2fa2.appspot.com",
  messagingSenderId: "32045173210",
  appId: "1:32045173210:web:c8ae7328a15663030518e3",
  measurementId: "G-YY11Z3LTRD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);