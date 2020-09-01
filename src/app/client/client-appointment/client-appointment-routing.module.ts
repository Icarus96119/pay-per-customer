import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientAppointmentComponent} from './client-appointment.component';

const routes: Routes = [
  {
    path: '', component: ClientAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAppointmentRoutingModule { }
