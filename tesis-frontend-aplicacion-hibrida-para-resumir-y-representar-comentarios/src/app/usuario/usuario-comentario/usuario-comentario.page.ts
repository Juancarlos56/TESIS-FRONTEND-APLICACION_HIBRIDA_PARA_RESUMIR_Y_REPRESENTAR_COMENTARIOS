import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ResumenServiceService } from 'src/app/services/resumen-service.service';




@Component({
  selector: 'app-usuario-comentario',
  templateUrl: './usuario-comentario.page.html',
  styleUrls: ['./usuario-comentario.page.scss'],
})
export class UsuarioComentarioPage implements OnInit {
  
  value = "";
  comentario1=""
  comen: FormGroup;

  constructor(private fbb: FormBuilder,
              private auth: Auth,
              private resumen : ResumenServiceService,
              private alertController: AlertController,
              private router: Router
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

 
    
  


  



  async guadarComentario(){
    const user = this.auth.currentUser;
    const usercorreo = this.auth.currentUser.email;
    const comentarioValor = this.comentario.value;
    const tipo_comentario= "Malo";

    const response= await this.resumen.guardarComentario( usercorreo, comentarioValor, tipo_comentario);
    if (response=='True') {
      this.showAlertGuardaComentario('Comentario Guardado','Sigue agregando más comentarios');
    } else {
      this.showAlert('Comentario Fallido', 'Por favor, Intente de nuevo!');
    }
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
    this.router.navigateByUrl('/usuario-menu/usuario-comentario', { replaceUrl: true });

  }  
  


}
