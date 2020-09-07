import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCampaignComponent } from './admin-campaign.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';

import { allCampaigns } from '../../core/data/campaign';

const routes: Routes = [
  { path: '', component: AdminCampaignComponent },
  { path: ':id', component: CampaignDetailComponent, data: allCampaigns[0] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCampaignRoutingModule { }
