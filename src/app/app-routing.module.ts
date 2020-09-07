import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './core/data/routes';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  }, {
    path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
  }, {
    path: ROUTES.admin.root, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }
  // {
  //   path: '', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
