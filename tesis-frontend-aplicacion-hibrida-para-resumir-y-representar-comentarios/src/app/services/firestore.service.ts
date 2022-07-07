import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, docData} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { PerfilInterface } from '../models/UserInterface';
import { Usuario } from '../models/Usuario';
import { Auth } from '@angular/fire/auth';
import { Storage,ref } from '@angular/fire/storage';
import { addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { getDownloadURL } from '@angular/fire/storage';


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
    private auth: Auth,
    private database: Firestore
  ) { }

  getUsuarios():Observable<PerfilInterface[]>{
    const userCollection = collection(this.database, 'users');
    return collectionData(userCollection, {idField:'id'}) as Observable<PerfilInterface[]>;
  }

  getUsuarioByID(uid):Observable<PerfilInterface>{
    const userCollectionRef = doc(this.database, 'users/${uid}');
    return docData(userCollectionRef, {idField:'uid'}) as Observable<PerfilInterface>;
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

  getUsuario(){
    const user = this.auth.currentUser.uid;
    const usercorreo = this.auth.currentUser.email;
    return user
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

   traerImagenesStorage(){
    const user = this.auth.currentUser.uid;
    const path = `images/edades/edadesUsuariosApp.png`
    const storageRef = ref(this.storage, path)
    
    const imagenUrl = getDownloadURL(storageRef);
    console.log(imagenUrl)
    return imagenUrl;
  }

  }