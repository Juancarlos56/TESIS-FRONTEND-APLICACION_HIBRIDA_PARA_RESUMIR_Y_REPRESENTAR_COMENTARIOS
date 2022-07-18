import { Injectable } from '@angular/core';
import { doc, Firestore, docData } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PerfilInterface } from '../models/UserInterface';
import { AlertController } from '@ionic/angular';
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

  constructor(private router: Router,private auth: Auth, private firestore: Firestore, private alertController: AlertController) {

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
        return user;
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
      if (user) {
        if(user.user.uid == 'V2vRbCk3qUWSyx1A2L00upQZJqb2'){
          this.router.navigateByUrl('/admin-menu/admin-perfil', { replaceUrl: true });
        }else{ 
          this.router.navigateByUrl('/usuario-menu', { replaceUrl: true });
        }
      } else {
        this.showAlert('Login fallido', 'Por favor intente de nuevo!');
        return null;
      }

    } catch (e) {
      return null;
    }
  }
  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
  
  logout() {
   return this.auth.signOut();
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
    return user;
  }

  verificacionRol(){
    const user = this.auth.currentUser.getIdTokenResult().then((idTokenResult) => {
       // Confirm the user is an Admin.
       if (!!idTokenResult.claims.admin) {
         // Show admin UI.
         //showAdminUI();
       } else {
         // Show regular user UI.
         //showRegularUI();
       }
    })
    .catch((error) => {
      console.log(error);
    });
  }

}