import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { StatusCardComponent } from './status-card/status-card.component';
import { NextBillingCardComponent } from './next-billing-card/next-billing-card.component';
import { PlanDetailCardComponent } from './plan-detail-card/plan-detail-card.component';
import { BillingDetailCardComponent } from './billing-detail-card/billing-detail-card.component';

@NgModule({
  declarations: [
    StatusCardComponent,
    NextBillingCardComponent,
    PlanDetailCardComponent,
    BillingDetailCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    StatusCardComponent,
    NextBillingCardComponent,
    PlanDetailCardComponent,
    BillingDetailCardComponent
  ]
})
export class CardModule { }
