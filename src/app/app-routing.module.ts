import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './core/data/routes';

const routes: Routes = [
  {
    path: ROUTES.admin.root, loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  }, {
    path: '', loadChildren: () => import('./client/client.module').then(m => m.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
