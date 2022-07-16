import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ResumenServiceService } from 'src/app/services/resumen-service.service';




@Component({
  selector: 'app-usuario-comentario',
  templateUrl: './usuario-comentario.page.html',
  styleUrls: ['./usuario-comentario.page.scss'],
})
export class UsuarioComentarioPage implements OnInit {
  
  value = "hhhhhhhhh";
  public comentario1=""
  comen: FormGroup;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(private fbb: FormBuilder,
              private auth: Auth,
              private resumen : ResumenServiceService,
              private alertController: AlertController,
              private router: Router,
              private loadingCtrl: LoadingController
    ) 
    {

    }


  get comentario(){
        return this.comen.get('comentario');
  }  
  
      
           
  ngOnInit() {
   // this.authService.stateUser().subscribe(res =>{
     // console.log('estado', res)
    //})
    this.comen = this.fbb.group(
      {
        comentario: ['', [Validators.required, Validators.minLength(3)]]      }
    );
  }

 
    
  


  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Estamos creando tu comentario,  3 segundos...',
      duration: 7000
    });
    
    loading.present();
  }


  async guadarComentario(){

    const user = this.auth.currentUser;
    const usercorreo = this.auth.currentUser.email;
    const comentarioValor = this.comentario.value;
    this.resumen.tipoComentarioApiRest(comentarioValor).then(async res=>{
      const response= await this.resumen.guardarComentario( usercorreo, comentarioValor, res.label);
      if (response=='True') {
        this.showAlertGuardaComentario('Comentario Guardado','Sigue agregando más comentarios');
      } else {
        this.showAlert('Comentario Fallido', 'Por favor, Intente de nuevo!');
      }  
    })
    
    //const tipo_comentario= "Malo";
    /*
    const response= await this.resumen.guardarComentario( usercorreo, comentarioValor, tipo_comentario);
    if (response=='True') {
      this.showAlertGuardaComentario('Comentario Guardado','Sigue agregando más comentarios');
    } else {
      this.showAlert('Comentario Fallido', 'Por favor, Intente de nuevo!');
    }*/
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();

  }  

  async showAlertGuardaComentario(header, message){

    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],

    });

    await alert.present();
    //this.router.navigateByUrl('/usuario-menu/usuario-comentario', { replaceUrl: true });
    this.comen = this.fbb.group(
      {
        comentario: ['', [Validators.required, Validators.minLength(3)]]      }
    );

  }  
  


}