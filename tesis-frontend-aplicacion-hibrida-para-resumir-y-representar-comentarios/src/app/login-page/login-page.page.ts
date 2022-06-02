import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  public password = "";
  public email = "";
  public gmailIcon = "../../assets/images/gmail.png"

  constructor() { }

  ngOnInit() {
  }

  public mostrarPassword(){
    console.log("entra al metodo"+this.password);
  }

  public login(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

  public iniciarConFacebook(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

  public iniciarConGoogle(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

  
}
