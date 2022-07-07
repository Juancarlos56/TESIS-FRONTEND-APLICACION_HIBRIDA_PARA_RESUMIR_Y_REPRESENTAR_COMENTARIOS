import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
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
              private resumenService: ResumenServiceService,
              private loadingCtrl: LoadingController) { }


  ngOnInit() {
   
    this.listaService.getNotes().subscribe(
      res=>{

        console.log(res);
        this.notes = res;
      }
    )
  }

  async listarComentarioService(){
    const usercorreo = this.listaService.getUsuarioEmail();
    const response= await this.resumenService.listarComentariosUsuario(usercorreo);

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Estamos creando tu comentario,  3 segundos...',
      duration: 6000
    });
    
    loading.present();
  }


  listarComentario(){
    const usuarioemail = this.listaService.getUsuarioEmail();
    console.log(usuarioemail)
    this.listaService.getNotes().subscribe(
      res=>{

        console.log(res);
        this.notes = res;
      }
    )

  }

}
