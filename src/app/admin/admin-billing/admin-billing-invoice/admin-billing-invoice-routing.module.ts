import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminBillingInvoiceComponent } from './admin-billing-invoice.component';

const routes: Routes = [
  { path: '', component: AdminBillingInvoiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBillingInvoiceRoutingModule { }
