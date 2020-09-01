import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminCampaignRoutingModule } from './admin-campaign-routing.module';

import { AdminCampaignComponent } from './admin-campaign.component';

@NgModule({
  declarations: [AdminCampaignComponent],
  imports: [
    CommonModule,
    AdminCampaignRoutingModule
  ]
})
export class AdminCampaignModule { }
