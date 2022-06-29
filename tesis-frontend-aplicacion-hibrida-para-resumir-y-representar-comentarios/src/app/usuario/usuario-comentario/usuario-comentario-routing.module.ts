import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioComentarioPage } from './usuario-comentario.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComentarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioComentarioPageRoutingModule {}
