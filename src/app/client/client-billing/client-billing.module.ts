import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CardModule } from '../../ui-kit/card/card.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';

import { ClientBillingRoutingModule } from './client-billing-routing.module';

import { ClientBillingComponent } from './client-billing.component';

@NgModule({
  declarations: [ClientBillingComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ButtonModule,
    InputModule,
    ClientBillingRoutingModule
  ]
})
export class ClientBillingModule { }
