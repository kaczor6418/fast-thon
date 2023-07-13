import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  TwitterAuthProvider,
  signOut,
} from 'firebase/auth';
import { UserCredential } from '@firebase/auth';
import firebase from 'firebase/compat';
import { OAuthProvider, UserProfile } from './AuthService.types';
import { AuthError } from '../../errors/AuthError';
import { firebaseAuth } from '../FirebaseService/firebase.config';
import FirebaseError = firebase.FirebaseError;

async function sigInWithOAuthPopup(authProvider: OAuthProvider): Promise<UserCredential> {
  return await signInWithPopup(firebaseAuth, authProvider).catch((error: FirebaseError) => {
    throw new AuthError(`Couldn't sign in user with [${authProvider.providerId}]`, error.code);
  });
}

export async function createUser(payload: Pick<UserProfile, 'email' | 'password'>): Promise<UserCredential> {
  return await createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password).catch(
    (error: FirebaseError) => {
      throw new AuthError(`Couldn't create user account.`, error.code);
    }
  );
}

export async function signInUser(payload: Pick<UserProfile, 'email' | 'password'>): Promise<UserCredential> {
  return await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password).catch(
    (error: FirebaseError) => {
      throw new AuthError(`Couldn't sign in user.`, error.code);
    }
  );
}

export async function signInWithGoogle(): Promise<UserCredential> {
  return await sigInWithOAuthPopup(new GoogleAuthProvider());
}

export async function signInWithFacebook(): Promise<UserCredential> {
  return await sigInWithOAuthPopup(new FacebookAuthProvider());
}

export async function signInWithTwitter(): Promise<UserCredential> {
  return await sigInWithOAuthPopup(new TwitterAuthProvider());
}

export async function signOutUser(): Promise<void> {
  return await signOut(firebaseAuth).catch((error: FirebaseError) => {
    throw new AuthError(`Couldn't sign out user.`, error.code);
  });
}
