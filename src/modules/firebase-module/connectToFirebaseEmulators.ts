import { connectAuthEmulator } from 'firebase/auth';
import { connectFirestoreEmulator } from 'firebase/firestore';
import { connectStorageEmulator } from 'firebase/storage';
import emulatorConfig from 'firebase-cfg/firebase.json';
import { firestore, firebaseStorage, firebaseAuth } from './firebase.config';

export function connectToFirebaseEmulators(): void {
  connectFirestoreEmulator(firestore, location.hostname, emulatorConfig.emulators.firestore.port);
  connectStorageEmulator(firebaseStorage, location.hostname, emulatorConfig.emulators.storage.port);
  connectAuthEmulator(firebaseAuth, `http://localhost:${emulatorConfig.emulators.auth.port}`, {
    disableWarnings: true,
  });
  console.info('🔥 FIREBASE EMULATORS CONNECTED');
}
