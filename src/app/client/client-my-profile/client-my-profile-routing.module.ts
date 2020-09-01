import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientMyProfileComponent} from './client-my-profile.component';

const routes: Routes = [
  {
    path: '', component: ClientMyProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientMyProfileRoutingModule { }
