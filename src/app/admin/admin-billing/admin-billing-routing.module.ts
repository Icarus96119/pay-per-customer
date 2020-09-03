import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from '../../core/data/routes';

import { AdminBillingComponent } from './admin-billing.component';

const routes: Routes = [
  {
    path: '', component: AdminBillingComponent,
    children: [
      { path: '', redirectTo: ROUTES.admin.billing.invoices },
      {
        path: ROUTES.admin.billing.invoices,
        loadChildren: () => import('./admin-billing-invoice/admin-billing-invoice.module').then(m => m.AdminBillingInvoiceModule),
      },
      {
        path: ROUTES.admin.billing.subscriptions,
        loadChildren: () => import('./admin-billing-subscription/admin-billing-subscription.module').then(m => m.AdminBillingSubscriptionModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBillingRoutingModule { }
