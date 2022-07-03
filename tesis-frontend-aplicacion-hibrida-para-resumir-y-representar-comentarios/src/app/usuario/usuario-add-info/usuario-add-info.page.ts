import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-usuario-add-info',
  templateUrl: './usuario-add-info.page.html',
  styleUrls: ['./usuario-add-info.page.scss'],
})
export class UsuarioAddInfoPage implements OnInit {

  public edad = "";
  public genero = "";

  constructor(private authService: AuthService) { }

  ngOnInit() {
    const user = this.authService.getUid()
    console.log("UID = " + user.then(rest => console.log(rest)))
  }

  public seguir(){
    console.log("entra al metodo login: "+this.edad+" "+this.genero);
  }

  
}

