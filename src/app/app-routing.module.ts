import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./pages/contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'blocknotas',
    loadChildren: () => import('./pages/blocknotas/blocknotas.module').then( m => m.BlocknotasPageModule)
  },
  {
    path: 'notasvoz',
    loadChildren: () => import('./pages/notasvoz/notasvoz.module').then( m => m.NotasvozPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'recordatorios',
    loadChildren: () => import('./pages/recordatorios/recordatorios.module').then( m => m.RecordatoriosPageModule)
  },
  { 
    path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule) 
  },
  {
    path: 'formulariocontacto',
    loadChildren: () => import('./pages/formulariocontacto/formulariocontacto.module').then( m => m.FormulariocontactoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
