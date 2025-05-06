// app/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyCIIk30WWAm2g6-SAr_Q87YSoNOi4wg6gU",
  authDomain: "madlab-e7f5f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
