import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioNotificacionPageRoutingModule } from './usuario-notificacion-routing.module';

import { UsuarioNotificacionPage } from './usuario-notificacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioNotificacionPageRoutingModule
  ],
  declarations: [UsuarioNotificacionPage]
})
export class UsuarioNotificacionPageModule {}
