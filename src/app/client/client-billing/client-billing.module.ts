import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../../ui-kit/card/card.module';

import { ClientBillingRoutingModule } from './client-billing-routing.module';

import { ClientBillingComponent } from './client-billing.component';

@NgModule({
  declarations: [ClientBillingComponent],
  imports: [
    CommonModule,
    CardModule,
    ClientBillingRoutingModule
  ]
})
export class ClientBillingModule { }
