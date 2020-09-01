import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminCampaignComponent } from './admin-campaign.component';

const routes: Routes = [
  {
    path: '', component: AdminCampaignComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCampaignRoutingModule { }
