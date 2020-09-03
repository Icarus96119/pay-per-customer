import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '../../../ui-kit/button/button.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { SubscriptionTableModule } from '../../../ui-kit/table/subscription-table/subscription-table.module';

import { AdminBillingSubscriptionRoutingModule } from './admin-billing-subscription-routing.module';

import { AdminBillingSubscriptionComponent } from './admin-billing-subscription.component';

@NgModule({
  declarations: [
    AdminBillingSubscriptionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    SubscriptionTableModule,
    AdminBillingSubscriptionRoutingModule
  ]
})
export class AdminBillingSubscriptionModule { }

