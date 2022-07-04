import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {
  redirectUnauthorizedTo,
  redirectLoggedInTo,
  canActivate,
}from '@angular/fire/auth-guard' 
import { AdminMenuPage } from './admin/admin-menu/admin-menu.page';
import { UsuarioMenuPage } from './usuario/usuario-menu/usuario-menu.page';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToUsuarioInfo = () => redirectLoggedInTo(['usuario-menu']);
const redirectLoggedInToAdminInfo = () => redirectLoggedInTo(['admin-menu']);
const redirectRegistroToUserInfo = () => redirectLoggedInTo(['usuario-add-info']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
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
    path: 'usuario-menu',
    component : UsuarioMenuPage,
    children: [
      {
        path: 'usuario-perfil',
        loadChildren: () => import('./usuario/usuario-perfil/usuario-perfil.module').then( m => m.UsuarioPerfilPageModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'usuario-comentario',
        loadChildren: () => import('./usuario/usuario-comentario/usuario-comentario.module').then( m => m.UsuarioComentarioPageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      },
      {
        path: 'usuario-notificacion',
        loadChildren: () => import('./usuario/usuario-notificacion/usuario-notificacion.module').then( m => m.UsuarioNotificacionPageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      },
      
      {
        path: 'usuario-lista-comentarios',
        loadChildren: () => import('./usuario/usuario-lista-comentarios/usuario-lista-comentarios.module').then( m => m.UsuarioListaComentariosPageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      }
    ]

  },




  {
    path: 'admin-menu',
    loadChildren: () => import('./admin/admin-menu/admin-menu.module').then( m => m.AdminMenuPageModule),
    ...canActivate(redirectUnauthorizedToLogin)
  },

  {
    path: 'admin-menu',
    component: AdminMenuPage,
    children:[

      {
        path: 'admin-resumen',
        loadChildren: () => import('./admin/admin-resumen/admin-resumen.module').then( m => m.AdminResumenPageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      },
      {
        path: 'adminkeywords',
        loadChildren: () => import('./admin/adminkeywords/adminkeywords.module').then( m => m.AdminkeywordsPageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      },
      {
        path: 'admintop10',
        loadChildren: () => import('./admin/admintop10/admintop10.module').then( m => m.Admintop10PageModule),
        ...canActivate(redirectUnauthorizedToLogin) 
      },
      {
        path: 'admin-perfil',
        loadChildren: () => import('./admin/admin-perfil/admin-perfil.module').then( m => m.AdminPerfilPageModule),
        ...canActivate(redirectUnauthorizedToLogin)
      }
    ]
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
