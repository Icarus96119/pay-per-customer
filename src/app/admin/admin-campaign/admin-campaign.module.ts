import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../ui-kit/input/input.module';
import { CampaignTableModule } from '../../ui-kit/table/campaign-table/campaign-table.module';

import { AdminCampaignRoutingModule } from './admin-campaign-routing.module';

import { AdminCampaignComponent } from './admin-campaign.component';

@NgModule({
  declarations: [
    AdminCampaignComponent
  ],
  imports: [
    CommonModule,
    AdminCampaignRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    CampaignTableModule
  ]
})
export class AdminCampaignModule { }
