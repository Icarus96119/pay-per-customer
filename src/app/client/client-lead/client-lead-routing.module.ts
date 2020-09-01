import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientLeadComponent } from './client-lead.component';

const routes: Routes = [
  {
    path: '', component: ClientLeadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientLeadRoutingModule { }
