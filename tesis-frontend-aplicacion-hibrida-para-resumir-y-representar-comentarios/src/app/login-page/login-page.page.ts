import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AlertController, IonInput, IonLabel, isPlatform, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  
  
  @ViewChild('Password') passwordVista: IonInput;
  public labelMostrar = false;
  
  public password1 = "";
  public email1 = "";
  public gmailIcon = "../../assets/images/gmail.png"

  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
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

  get email(){
    return this.credentials.get('email');
  }

  get password(){
    return this.credentials.get('password')
  }

  ngOnInit() {
    this.credentials = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.minLength(8)]]
      }
    );
  }

  
  public mostrarPassword(){
    this.passwordVista.type = 'text';
    this.labelMostrar = true;
  }

  public ocultarPassword(){
    this.passwordVista.type = 'password';
    this.labelMostrar = false;
  }


  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();
  }

  public iniciarConFacebook(){
    
  }

  async iniciarConGoogle(){
    
   this.authService.elPoderosoLOGINCONGOOGLE();
    this.router.navigateByUrl('/usuario-menu', { replaceUrl: true });

  }

  async refresh(){
    const authCode = await GoogleAuth.refresh();
    console.log('refresh', authCode)
  }

  async singOutG (){
    await GoogleAuth.signOut();
  }

  
}

