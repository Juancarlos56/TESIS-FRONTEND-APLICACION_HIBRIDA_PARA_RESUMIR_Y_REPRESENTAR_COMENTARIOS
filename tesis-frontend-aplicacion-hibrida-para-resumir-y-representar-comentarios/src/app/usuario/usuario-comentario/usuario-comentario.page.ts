import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario-comentario',
  templateUrl: './usuario-comentario.page.html',
  styleUrls: ['./usuario-comentario.page.scss'],
})
export class UsuarioComentarioPage implements OnInit {

  public descripcion = "";
  iud: string = null
  correoU: string = null
  constructor(private authService: AuthService) { }


  ngOnInit() {
   // this.authService.stateUser().subscribe(res =>{
     // console.log('estado', res)
    //})
    this.getUid();
    this.creaComentario
  }

  async getUid (){
    const iud =  await this.authService.getUid();
    if(iud){
        this.iud = iud
        console.log('uide', this.iud)

    }else {
      console.log('no existe')
    }
  }

  async creaComentario (){
    const correo = await this.authService.getCorreo();
    if(correo){
      this.correoU = correo
      console.log('correo', this.iud)

  }else {
    console.log('no existe')
  }
  }


}
