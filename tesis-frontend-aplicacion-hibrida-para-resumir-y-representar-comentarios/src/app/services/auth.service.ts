import { Injectable } from '@angular/core';
import { doc, Firestore, docData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
} from '@angular/fire/auth';

import {
  getAuth,
  getRedirectResult,
  signInWithPopup,
  signInWithRedirect,
} from 'firebase/auth';


@Injectable({
  providedIn: 'root',
})

export class AuthService {

  public providerG = new GoogleAuthProvider();

  constructor(private router: Router,private auth: Auth, private firestore: Firestore) {

  }

  elPoderosoLOGINCONGOOGLE() {
    //const auth = getAuth();

    //para abrir dentro de la pagina web
    signInWithRedirect(this.auth, this.providerG);
    //O PUEDES USAR UAN PAGINA EXTRA

    //signInWithPopup(auth, this.providerG)
    //.then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    //const credential = GoogleAuthProvider.credentialFromResult(result);
    //const token = credential.accessToken;
    // The signed-in user info.
    //const user = result.user;
    // ...
    //}).catch((error) => {
    // Handle Errors here.
    //const errorCode = error.code;
    //const errorMessage = error.message;
    // The email of the user's account used.
    //const email = error.customData.email;
    // The AuthCredential type that was used.
    //const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    // });

    //para redireccionar a la pagina de google
    getRedirectResult(this.auth)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  async  registrarConGoogle() {
    signInWithRedirect(this.auth, this.providerG);
    getRedirectResult(this.auth)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
      
  }
  
  async register(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      return user;
    } catch (e) {
      return null;
    }
  }

  logout() {
    return signOut(this.auth);
  }

  async getUid() {
    const user = await this.auth.currentUser;
    if (user) {
      return user.uid;
    } else {
      return null;
    }
  }

  async getCorreo() {
    const correoU = await this.auth.currentUser;
    if (correoU) {
      return correoU.email;
    } else {
      return null;
    }
  }
  
  getUserProfile(){
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, 'users/${user.uid}')
    return docData(userDocRef)
  }

}
