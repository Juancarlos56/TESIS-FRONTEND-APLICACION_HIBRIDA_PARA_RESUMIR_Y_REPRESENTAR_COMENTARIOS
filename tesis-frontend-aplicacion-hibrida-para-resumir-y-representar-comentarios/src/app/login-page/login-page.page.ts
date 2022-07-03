import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  public password1 = "";
  public email1 = "";
  public gmailIcon = "../../assets/images/gmail.png"

  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

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
 
    if (user) {
      this.router.navigateByUrl('/usuario-menu', { replaceUrl: true });
    } else {
      this.showAlert('Login fallido', 'Por favor intente de nuevo!');
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

  public iniciarConFacebook(){
    console.log("entra al metodo login: "+this.email1+" "+this.password1);
  }

  async iniciarConGoogle(){
    console.log("entra al metodo login: "+this.email1+" "+this.password1);
   
    try {
      //const user = await this.authService.loginGoogle();
      //if (user){
      //  console.log('user', user);
      //}
    }
    catch(error){
      console.log('error',error)}
  }

  
}
