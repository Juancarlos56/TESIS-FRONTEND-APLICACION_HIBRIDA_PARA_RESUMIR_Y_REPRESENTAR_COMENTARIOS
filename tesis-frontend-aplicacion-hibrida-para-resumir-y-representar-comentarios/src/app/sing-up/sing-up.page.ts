import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, AlertController, isPlatform } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ElementRef } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { GoogleAuthProvider } from 'firebase/auth';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})

export class SingUpPage implements OnInit {

  public datos: FormGroup;
  public nombres:string = "";
  public apellidos = "";
  public passwordValidacion = "";
  public password = "";
  public email = "";
  public gmailIcon = "../../assets/images/gmail.png";
  public passwordStrong = null;
  public passwordStrongVerificacion = null;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) {
    if (!isPlatform('capacitor')){
      GoogleAuth.initialize({
        clientId: '973370360772-vo9uf5gemmvbakbpduvljfkfupevtf4m.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true,
      });


    }
   }

  ngOnInit() {
    this.datos = this.fb.group(
      {
        emailForm: ['', [Validators.required, Validators.email]],
        passwordForm: ['',[Validators.required, Validators.minLength(8)]],
        passwordValidacionForm: ['',[Validators.required, Validators.minLength(8)]], 
        nombresForm: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(3)]], 
        apellidosForm: ['',[Validators.required, Validators.maxLength(20), Validators.minLength(3)]], 
      }
    );
  }

  get emailForm(){
    return this.datos.get('emailForm');
  }

  get passwordForm(){
    return this.datos.get('passwordForm')
  }

  get passwordValidacionForm(){
    return this.datos.get('passwordValidacionForm')
  }

  get nombresForm(){
    return this.datos.get('nombresForm')
  }

  get apellidosForm(){
    return this.datos.get('apellidosForm')
  }
  
  public mostrarPassword(){
    console.log("entra al metodo"+this.password + " formulario: "+this.nombresForm);
  }

  public validarRobustezPassword(eventoTeclado){
    var passwordTeclado = eventoTeclado.target.value;
    
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    
    if(strongRegex.test(passwordTeclado)) {
        this.passwordStrong = "success";
    } else if(mediumRegex.test(passwordTeclado)) {
        this.passwordStrong = "warning";
    } else {
        this.passwordStrong = "danger";
    }

  }

  public validarIgualdadPassword(eventoTeclado){
    var passwordTeclado = eventoTeclado.target.value;
    
   
    if(passwordTeclado==this.password) {
        this.passwordStrongVerificacion = "success";
    } else {
        this.passwordStrongVerificacion = "danger";
    }

  }

  async register() {
  
    const user = await this.authService.register(this.email, this.password);
    if (user) {
      this.router.navigateByUrl('/usuario-menu/usuario-add-info', { replaceUrl: true });
    } else {
      this.showAlert('Registro Fallido', 'Por favor, Intente de nuevo!');
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


  public registrarConFacebook(){
    console.log("entra al metodo login: "+this.email+" "+this.password);
  }

  async registrarConGoogle(){
    const usuario = await GoogleAuth.signIn();
    console.log('user:', usuario);  
    this.router.navigateByUrl('/usuario-menu', { replaceUrl: true });
  }

}
