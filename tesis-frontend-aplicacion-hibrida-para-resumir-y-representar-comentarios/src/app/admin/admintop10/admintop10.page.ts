import { Component, OnInit} from '@angular/core';
import { ResumenServiceService } from 'src/app/services/resumen-service.service';
import { AuthService } from '../../services/auth.service';
import { FirestoreService } from '../../services/firestore.service';
import { AlertController, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-admintop10',
  templateUrl: './admintop10.page.html',
  styleUrls: ['./admintop10.page.scss'],
})
export class Admintop10Page implements OnInit {

  public nombre: String = '';
  public token: string = '';
  public comentariosObtenidos = []
  public loading = null;

  constructor(private usurio: AuthService, 
    private serviceStorage : FirestoreService,
    private resumen: ResumenServiceService,
    private alertController: AlertController,
    private loadingCtrl: LoadingController
     ) { }

  ngOnInit() {
    this.serviceStorage
      .getUsuarioByID(this.usurio.getUserProfile().uid)
      .subscribe((res) => {
        this.nombre = res.nombres;
      });

  }

  obtenerComentariosFacebook(){
    this.resumen.obtenerComentariosFacebookAPI(this.token).then(res=>{
      const comentarios = res.comentario_completo as []
      const fechaComentario = res.fecha_comentario as []
      const id_pagina_post = res.id_pagina_post as []
      const profileName = res['Profile Name'] as []
      console.log("comentarios: "+ comentarios)
      for (let index = 0; index < comentarios.length; index++) {
        this.comentariosObtenidos.push([comentarios[index],fechaComentario[index],id_pagina_post[index],profileName[index]])
      }
    });
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Guardar Comentarios!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Guardar',
          role: 'confirm',
          handler: () => { this.guardarComentariosFacebook()}
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }
  
  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Esto tomara un timepo, no cierre la apliación...',
      duration: 650000,
      cssClass: 'custom-loading'
    });
    
    this.loading.present();
  }

  guardarComentariosFacebook(){
    console.log("OK")
    this.showLoading()
    this.resumen.guardarComentariosFacebookAPI().then(res=>{
      this.loading.dismiss();
      this.notificacionAviso()

    })
  }
  async notificacionAviso() {
    const alert = await this.alertController.create({
      header: 'Comentarios Almacenados',
      buttons: [
        {
          text: 'Confirmar',
          role: 'confirm'
        }
      ]
    });

    await alert.present();
    const { role } = await alert.onDidDismiss();
  }


}
//'#446AA3','#DEE2FF','#B3B9E8','#E8B3B7','#9C595F' ['rgba(38, 24, 74, 0.8)', 'rgba(71, 58, 131, 0.8)','rgba(122, 120, 168, 0.8)']