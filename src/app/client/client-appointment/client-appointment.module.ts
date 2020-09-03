import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from '../../ui-kit/button/button.module';
import { AppointmentTableModule } from './appointment-table/appointment-table.module';

import { ClientAppointmentRoutingModule } from './client-appointment-routing.module';

import { ClientAppointmentComponent } from './client-appointment.component';

@NgModule({
  declarations: [
    ClientAppointmentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AppointmentTableModule,
    ClientAppointmentRoutingModule
  ]
})
export class ClientAppointmentModule { }
