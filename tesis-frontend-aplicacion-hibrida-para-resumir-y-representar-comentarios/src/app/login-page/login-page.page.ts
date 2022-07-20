import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { AlertController, isPlatform, LoadingController } from '@ionic/angular';
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
    console.log("entra al metodo"+this.password1);
  }


  async login() {
    const loading = await this.loadingController.create();
    await loading.present();
 
    const user = await this.authService.login(this.credentials.value);
    await loading.dismiss();
  }

  public iniciarConFacebook(){
    console.log("entra al metodo login: "+this.email1+" "+this.password1);
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

