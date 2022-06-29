import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioComentarioPageRoutingModule } from './usuario-comentario-routing.module';

import { UsuarioComentarioPage } from './usuario-comentario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioComentarioPageRoutingModule
  ],
  declarations: [UsuarioComentarioPage]
})
export class UsuarioComentarioPageModule {}
