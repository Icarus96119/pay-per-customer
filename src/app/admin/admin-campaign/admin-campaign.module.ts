import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { CampaignTableModule } from '../../ui-kit/table/campaign-table/campaign-table.module';
import { TaskTableModule } from '../../ui-kit/table/task-table/task-table.module';
import { AppointmentTableModule } from '../../ui-kit/table/appointment-table/appointment-table.module';
import { CardModule } from '../../ui-kit/card/card.module';
import { ChartModule } from '../../ui-kit/chart/chart.module';

import { AdminCampaignRoutingModule } from './admin-campaign-routing.module';

import { AdminCampaignComponent } from './admin-campaign.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
import { CampaignDetailCardComponent } from './campaign-detail-card/campaign-detail-card.component';

@NgModule({
  declarations: [
    AdminCampaignComponent,
    CampaignDetailComponent,
    CampaignDetailCardComponent,
  ],
  imports: [
    CommonModule,
    AdminCampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    InputModule,
    CampaignTableModule,
    TaskTableModule,
    AppointmentTableModule,
    CardModule,
    ChartModule
  ]
})
export class AdminCampaignModule { }
