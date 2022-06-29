import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioAddInfoPageRoutingModule } from './usuario-add-info-routing.module';

import { UsuarioAddInfoPage } from './usuario-add-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioAddInfoPageRoutingModule
  ],
  declarations: [UsuarioAddInfoPage]
})
export class UsuarioAddInfoPageModule {}
