import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData, doc, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PerfilInterface } from '../models/UserInterface';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private database: Firestore) { 

  }
  
  getUsuarios():Observable<PerfilInterface[]>{
    const userCollection = collection(this.database, 'Usuario');
    return collectionData(userCollection, {idField:'id'}) as Observable<PerfilInterface[]>;
  }

  getUsuarioByID(id):Observable<PerfilInterface>{
    const userCollectionRef = doc(this.database, 'Usuario/${id}');
    return docData(userCollectionRef, {idField:'id'}) as Observable<PerfilInterface>;
  }

  addUsuario(user: PerfilInterface){
    const userCollectionRef = collection(this.database, 'Usuario');
    return addDoc(userCollectionRef, user);
  }

}
  
