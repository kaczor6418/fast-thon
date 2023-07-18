import { FacebookAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

export interface UserProfile {
  displayName: string;
  photoURL: string;
  password: string;
  email: string;
}

export type OAuthProvider = GoogleAuthProvider | TwitterAuthProvider | FacebookAuthProvider;
