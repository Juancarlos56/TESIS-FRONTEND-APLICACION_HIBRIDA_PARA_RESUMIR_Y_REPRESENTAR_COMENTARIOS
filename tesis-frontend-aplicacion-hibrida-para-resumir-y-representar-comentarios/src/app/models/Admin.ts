import { PerfilInterface } from './UserInterface';

export class Admin implements PerfilInterface{
    //Atributos 
    nombres = null;
    apellido = null;
    email=null;
    password= null;
    fechaNacimiento= null;
    uid= null;
    perfil= "Admin";
    direccion = null;
    genero = null;
    edad = null;
    
    //Metodos
    calcularEdad(){
        var timeDiff = Math.abs(Date.now() - this.fechaNacimiento);
        this.age = Math.ceil((timeDiff / (1000 * 3600 * 24)) / 365);
    } 
}