import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';
import { AvatarModule } from '../avatar/avatar.module';

import { StatusCardComponent } from './status-card/status-card.component';
import { NextBillingCardComponent } from './next-billing-card/next-billing-card.component';
import { PlanDetailCardComponent } from './plan-detail-card/plan-detail-card.component';
import { BillingDetailCardComponent } from './billing-detail-card/billing-detail-card.component';
import { EmailChatCardComponent } from './email-chat-card/email-chat-card.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [
    StatusCardComponent,
    NextBillingCardComponent,
    PlanDetailCardComponent,
    BillingDetailCardComponent,
    EmailChatCardComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    AvatarModule
  ],
  exports: [
    StatusCardComponent,
    NextBillingCardComponent,
    PlanDetailCardComponent,
    BillingDetailCardComponent,
    EmailChatCardComponent,
    TaskCardComponent
  ]
})
export class CardModule { }
