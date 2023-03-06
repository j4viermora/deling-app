import { app } from "./client";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";

export const auth = getAuth(app);

// login with google and firebase 
export const loginWithGoogle = async (): Promise<UserCredential> => {
    const provider = new GoogleAuthProvider();
  return  signInWithPopup(auth, provider)
    .then((credential) => {
      return credential.user;
    })
    .catch((error) => {
      return error;
    })
}

// logout with firebase
export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    return error;
  }
}