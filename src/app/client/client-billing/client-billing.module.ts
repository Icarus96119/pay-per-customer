import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientBillingRoutingModule } from './client-billing-routing.module';

import { ClientBillingComponent } from './client-billing.component';

@NgModule({
  declarations: [ClientBillingComponent],
  imports: [
    CommonModule,
    ClientBillingRoutingModule
  ]
})
export class ClientBillingModule { }
