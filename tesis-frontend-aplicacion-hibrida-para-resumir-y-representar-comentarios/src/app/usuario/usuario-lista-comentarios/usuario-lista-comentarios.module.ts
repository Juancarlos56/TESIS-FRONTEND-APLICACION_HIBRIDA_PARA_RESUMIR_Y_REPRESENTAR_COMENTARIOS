import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioListaComentariosPageRoutingModule } from './lista-comentarios-routing.module';

import { UsuarioListaComentariosPage } from './usuario-lista-comentarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioListaComentariosPageRoutingModule
  ],
  declarations: [UsuarioListaComentariosPage]
})
export class UsuarioListaComentariosPageModule {}
