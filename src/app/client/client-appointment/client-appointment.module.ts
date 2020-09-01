import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientAppointmentRoutingModule } from './client-appointment-routing.module';

import { ClientAppointmentComponent } from './client-appointment.component';

@NgModule({
  declarations: [ClientAppointmentComponent],
  imports: [
    CommonModule,
    ClientAppointmentRoutingModule
  ]
})
export class ClientAppointmentModule { }
