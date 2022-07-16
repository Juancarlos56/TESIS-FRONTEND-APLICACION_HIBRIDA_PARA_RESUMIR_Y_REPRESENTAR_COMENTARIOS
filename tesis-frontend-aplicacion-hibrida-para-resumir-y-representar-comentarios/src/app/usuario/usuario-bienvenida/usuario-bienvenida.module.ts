import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioBienvenidaPageRoutingModule } from './usuario-bienvenida-routing.module';

import { UsuarioBienvenidaPage } from './usuario-bienvenida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioBienvenidaPageRoutingModule
  ],
  declarations: [UsuarioBienvenidaPage]
})
export class UsuarioBienvenidaPageModule {}
