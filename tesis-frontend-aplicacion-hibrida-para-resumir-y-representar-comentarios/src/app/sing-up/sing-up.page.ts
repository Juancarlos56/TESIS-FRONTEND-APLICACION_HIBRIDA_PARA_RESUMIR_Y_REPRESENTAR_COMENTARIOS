import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {

  public nombres = "";
  public apellidos = "";
  public password2 = "";
  public password = "";
  public email = "";
  public gmailIcon = "../../assets/images/gmail.png"

  constructor() { }

  ngOnInit() {
  }

  
  public mostrarPassword(){
    console.log("entra al metodo"+this.password);
  }

  public registrar(){
    console.log("entra al metodo registrar: "+this.email+" "+this.password);
  }

  public registrarConFacebook(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

  public registrarConGoogle(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

}
