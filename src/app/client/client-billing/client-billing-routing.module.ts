import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientBillingComponent } from './client-billing.component';

const routes: Routes = [
  {
    path: '', component: ClientBillingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientBillingRoutingModule { }
