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
    public calcularEdad():void {
        const today: Date = new Date();
        const birthDate: Date = new Date(this.fechaNacimiento);
        let age: number = today.getFullYear() - birthDate.getFullYear();
        const month: number = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        this.edad = age;
    }
}