import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-add-info',
  templateUrl: './usuario-add-info.page.html',
  styleUrls: ['./usuario-add-info.page.scss'],
})
export class UsuarioAddInfoPage implements OnInit {

  public edad = "";
  public genero = "";

  constructor() { }

  ngOnInit() {
  }

  public seguir(){
    console.log("entra al metodo login: "+this.edad+" "+this.genero);
  }

  
}

