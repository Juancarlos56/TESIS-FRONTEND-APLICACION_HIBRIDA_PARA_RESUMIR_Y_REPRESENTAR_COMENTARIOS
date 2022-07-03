export interface PerfilInterface{
    //Atributos 
    nombres: String;
    apellido: String;
    email:String;
    password: String;
    fechaNacimiento: number;
    uid: string;
    perfil: String;
    direccion : string;
    genero : string;
    edad: number;

    //Metodos
    calcularEdad():void;
}