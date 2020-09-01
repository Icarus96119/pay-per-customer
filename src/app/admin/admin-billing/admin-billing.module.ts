import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBillingRoutingModule } from './admin-billing-routing.module';

import { AdminBillingComponent } from './admin-billing.component';

@NgModule({
  declarations: [AdminBillingComponent],
  imports: [
    CommonModule,
    AdminBillingRoutingModule
  ]
})
export class AdminBillingModule { }
