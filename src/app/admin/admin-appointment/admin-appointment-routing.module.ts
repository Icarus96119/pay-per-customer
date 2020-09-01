import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAppointmentComponent } from './admin-appointment.component';

const routes: Routes = [
  {
    path: '', component: AdminAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAppointmentRoutingModule { }
