import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ResumenServiceService } from 'src/app/services/resumen-service.service';
@Component({
  selector: 'app-usuario-lista-comentarios',
  templateUrl: './usuario-lista-comentarios.page.html',
  styleUrls: ['./usuario-lista-comentarios.page.scss'],
})
export class UsuarioListaComentariosPage implements OnInit {

  notes = []
  constructor(private listaService : FirestoreService,
              private resumenService: ResumenServiceService) { }


  ngOnInit() {
   
    this.listarComentario();
  }

  async listarComentarioService(){
    const usercorreo = this.listaService.getUsuarioEmail();
    const response= await this.resumenService.listarComentariosUsuario(usercorreo);

  }


  listarComentario(){
    const usuarioemail = this.listaService.getUsuarioEmail();
    console.log(usuarioemail)
    this.listaService.getNotes().subscribe(
      res=>{

        console.log(res);
      
      }
    )

  }

}
