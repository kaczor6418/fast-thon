import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
});
export const firebaseAuth = getAuth(firebaseApp);
export const firestore = getFirestore(firebaseApp);
export const firebaseStorage = getStorage(firebaseApp);
