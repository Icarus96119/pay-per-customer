import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAgreementComponent } from './admin-agreement.component';

const routes: Routes = [
  {
    path: '', component: AdminAgreementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAgreementRoutingModule { }
