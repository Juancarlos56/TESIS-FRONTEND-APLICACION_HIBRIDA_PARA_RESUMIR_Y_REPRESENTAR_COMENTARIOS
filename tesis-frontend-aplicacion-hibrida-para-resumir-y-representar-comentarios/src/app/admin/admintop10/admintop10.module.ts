import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Admintop10PageRoutingModule } from './admintop10-routing.module';

import { Admintop10Page } from './admintop10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Admintop10PageRoutingModule
  ],
  declarations: [Admintop10Page]
})
export class Admintop10PageModule {}
