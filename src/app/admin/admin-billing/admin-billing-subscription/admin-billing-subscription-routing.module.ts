import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBillingSubscriptionComponent } from './admin-billing-subscription.component';

const routes: Routes = [
  { path: '', component: AdminBillingSubscriptionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBillingSubscriptionRoutingModule { }
