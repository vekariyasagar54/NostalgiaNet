import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDV57ionylJybB-nVnyYko7FZHKwEOBq_o",
  authDomain: "nostalgianet-5f1ad.firebaseapp.com",
  projectId: "nostalgianet-5f1ad",
  storageBucket: "nostalgianet-5f1ad.appspot.com",
  messagingSenderId: "285115491910",
  appId: "1:285115491910:web:8d5c5e879d349dca5e0c47",
  measurementId: "G-ECBR9GCKDM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export const provider = new GoogleAuthProvider();
