import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';
import Chart from 'chart.js/auto';
import { AuthService } from 'src/app/services/auth.service';
import { GraficaServiceService } from 'src/app/services/grafica-service.service';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-adminkeywords',
  templateUrl: './adminkeywords.page.html',
  styleUrls: ['./adminkeywords.page.scss'],
})
export class AdminkeywordsPage implements OnInit {
  notes = [6];

  public imagenKeywords1 = '';
  public servicio = '';
  public sentimiento = 'SinClasificacion';
  public texto = '';
  private url= `images/nubePalabras/palabrasGeneradas.png`
  cont=0;

  public pruebaChart : Chart; 
  //Parametros para mensajes e informacion
  public nombre: String = '';

  
  public sentimientoText = true;

  constructor(private alertController: AlertController, 
              private graficas: GraficaServiceService, 
              private usurio: AuthService, 
              private serviceStorage : FirestoreService,
              private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.serviceStorage
      .getUsuarioByID(this.usurio.getUserProfile().uid)
      .subscribe((res) => {
        this.nombre = res.nombres;
      });

    this.mostrarImagen(this.url);
  }

  reset(){
    this.servicio = '';
    this.sentimiento = 'SinClasificacion';
    this.texto = '';
    this.url= `images/nubePalabras/palabrasGeneradas.png`
    this.sentimientoText = true;

  }

  cargaServicio(event:any){
    this.sentimientoText = false;
    this.servicio = event.detail.value
  }

  doRefresh(event) {
    setTimeout(() => {
      event.target.complete();
      this.imagenKeywords1 = this.imagenKeywords1
    }, 2000);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'No existen comentatarios',
      buttons: [
        {
          text: 'OK',
          role: 'confirm'
        }
      ]
    });
    await alert.present();

  }


  cargaSentimientosPalabras(event:any){
    console.log(event.detail.value)
    this.sentimiento = event.detail.value
     this.graficas.buscarComentarios('comentario',this.servicio, this.sentimiento).then(res=>{
      console.log("res.rutaImg: "+res.rutaImg)
      if('not exist' == res.rutaImg){
        this.presentAlert();
        return;
      }
      this.imagenKeywords1 = res.rutaImg
      const r = res.comentarios as any[]
    });
  }

  mostrarImagen(urlI){
    this.serviceStorage.traerImagenesStorage(urlI).then(res=>{
      this.imagenKeywords1 = res;
    });
  }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando imagen...',
      duration: 3500,
      cssClass: 'custom-loading'
    });
    
    loading.present();
  }

  filtrarComentario(){
    this.sentimiento = 'SinClasificacion';
    this.showLoading();
    this.graficas.buscarComentarios('comentario',this.texto, this.sentimiento).then(res=>{
      console.log("res: "+  res.rutaImg)
      if('not exist' == res.rutaImg){
        this.presentAlert();
        return;
      }
      this.imagenKeywords1 = res.rutaImg
      const r = res.comentarios as any[]

    });
  }

}
