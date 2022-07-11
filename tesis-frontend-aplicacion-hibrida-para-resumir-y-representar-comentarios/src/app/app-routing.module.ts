import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
  hasCustomClaim,
}from '@angular/fire/auth-guard' 


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToUsuarioInfo = () => redirectLoggedInTo(['usuario-menu']);
//const redirectLoggedInToAmdinUsuario = () => redirectLoggedInTo(['admin-menu']);
const adminOnly = () => hasCustomClaim('admin');

const redirectRegistroToUserInfo = () => redirectLoggedInTo(['usuario-add-info']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./sing-up/sing-up.module').then( m => m.SingUpPageModule),...canActivate(redirectRegistroToUserInfo)
  },

  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule),
    ...canActivate(redirectLoggedInToUsuarioInfo)
  },

  {
    path: 'usuario-add-info',
    loadChildren: () => import('./usuario/usuario-add-info/usuario-add-info.module').then( m => m.UsuarioAddInfoPageModule),
    ...canActivate(redirectUnauthorizedToLogin) 
  },

  {
    path: 'usuario-menu',
    loadChildren: () => import('./usuario/usuario-menu/usuario-menu.module').then( m => m.UsuarioMenuPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },

  {
    path: 'admin-menu',
    loadChildren: () => import('./admin/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule), canActivate:[AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
