import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { CampaignTableModule } from '../../ui-kit/table/campaign-table/campaign-table.module';

import { AdminCampaignRoutingModule } from './admin-campaign-routing.module';

import { AdminCampaignComponent } from './admin-campaign.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

@NgModule({
  declarations: [
    AdminCampaignComponent,
    CampaignDetailComponent,
  ],
  imports: [
    CommonModule,
    AdminCampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    InputModule,
    CampaignTableModule
  ]
})
export class AdminCampaignModule { }
