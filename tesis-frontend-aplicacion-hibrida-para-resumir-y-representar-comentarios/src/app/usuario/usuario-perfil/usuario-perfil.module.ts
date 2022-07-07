import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPerfilPageRoutingModule } from './usuario-perfil-routing.module';

import { UsuarioPerfilPage } from './usuario-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPerfilPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [UsuarioPerfilPage]
})
export class UsuarioPerfilPageModule {}
