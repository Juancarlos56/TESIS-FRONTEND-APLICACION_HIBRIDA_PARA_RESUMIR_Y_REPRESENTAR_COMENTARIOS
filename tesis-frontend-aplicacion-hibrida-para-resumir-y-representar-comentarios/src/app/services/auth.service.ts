import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,


} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private auth: Auth) { }

  async register({ email, password }) {
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
    this.auth.signOut();
  }



  async getUid(){
    const user = await this.auth.currentUser
    if (user){
      return user.uid;
    } else {
      return null;
    }  
  }

  async getCorreo(){
    const correoU = await this.auth.currentUser
    if (correoU){
      return correoU.email;
    } else {
      return null;
    }  
  }

  
  

 

}
