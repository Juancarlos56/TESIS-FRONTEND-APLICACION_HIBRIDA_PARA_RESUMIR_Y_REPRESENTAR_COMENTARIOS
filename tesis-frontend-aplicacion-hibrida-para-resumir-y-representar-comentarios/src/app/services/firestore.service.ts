import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData, doc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PerfilInterface } from '../models/UserInterface';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private database: Firestore) { 

  }
  
  getUsuarios():Observable<PerfilInterface[]>{
    const userCollection = collection(this.database, 'users');
    return collectionData(userCollection, {idField:'id'}) as Observable<PerfilInterface[]>;
  }

  getUsuarioByID(id):Observable<PerfilInterface>{
    const userCollectionRef = doc(this.database, 'users/${id}');
    return docData(userCollectionRef, {idField:'id'}) as Observable<PerfilInterface>;
  }

  addUsuario(user: Usuario){
    const userJson = {
      nombres: user.nombres,
      apellido: user.apellido,
      email:user.email,
      fechaNacimiento: user.fechaNacimiento,
      uid: user.uid,
      perfil: user.perfil,
      direccion : user.direccion,
      genero : user.genero,
      edad: user.edad,
  
    }
    const userCollectionRef = collection(this.database, 'users');
    userCollectionRef.id
    return addDoc(userCollectionRef, userJson);
  }

}
  
