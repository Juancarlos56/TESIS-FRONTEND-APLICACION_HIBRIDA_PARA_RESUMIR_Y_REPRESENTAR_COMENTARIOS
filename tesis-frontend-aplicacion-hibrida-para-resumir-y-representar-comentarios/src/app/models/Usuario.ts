import { PerfilInterface } from './UserInterface';

export class Usuario implements PerfilInterface{
    //Atributos 
    nombres = null;
    apellido = null;
    email=null;
    password= null;
    fechaNacimiento= null;
    uid= null;
    perfil= "Usuario";
    direccion = null;
    genero = null;
    
    //Metodos
    calcularEdad(){

    } 
}