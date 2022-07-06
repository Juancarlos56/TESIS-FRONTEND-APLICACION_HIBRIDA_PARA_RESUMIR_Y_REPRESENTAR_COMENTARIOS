import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData,collection, docData, Firestore } from '@angular/fire/firestore';
import { Storage, StorageReference } from '@angular/fire/storage';
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';


export interface Note{
    //Atributos 
    id?: String;
    correo_comentario:String
    title: String;
    text:String;

}

@Injectable({
  providedIn: 'root'
})
 
export class FirestoreService {

  constructor(
    private firestore : Firestore,
    private storage: Storage,
    private auth: Auth
  ) { }

  getUsuario(){
    const user = this.auth.currentUser;
    const usercorreo = this.auth.currentUser.email;
    const userDocRef = doc(this.firestore, 'users/${user.uid}');
    return docData(userDocRef)
  }

  getUsuarioEmail(){
    const user = this.auth.currentUser.email;
    return user
  }


  async agregarComentario(comentario:String){
    const user = this.auth.currentUser;
    const path= 'Comentario/Comentario/'
  }


  getNotes(){
    const notesRef = collection(this.firestore, 'Comentario');
    return collectionData(notesRef);
  }

  getNotesById(id):Observable<Note>{
    const noteDocRef = doc(this.firestore, `Comentario/${id}`);
    return docData(noteDocRef, {idField:'id'}) as Observable<Note>
  }

  addNote(note:Note){
    const notesRef = collection(this.firestore, 'Comentario');
    return addDoc(notesRef, note)
  }

  deleteNote(note:Note){
    const noteDocRef = doc(this.firestore, `Comentario/${note.id}`);
    return deleteDoc(noteDocRef);
  }

  updateNote(note:Note){
    const noteDocRef = doc(this.firestore, 'Comentario/${note.id}');
    return updateDoc(noteDocRef, {})
  }

  }
  

