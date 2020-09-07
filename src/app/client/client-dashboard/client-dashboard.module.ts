import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../../ui-kit/icon/icon.module';
import { AppointmentTableModule } from './appointment-table/appointment-table.module';

import { ClientDashboardRoutingModule } from './client-dashboard-routing.module';

import { ClientDashboardComponent } from './client-dashboard.component';
import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [
    ClientDashboardComponent,
    StatusCardComponent,
  ],
  imports: [
    CommonModule,
    IconModule,
    AppointmentTableModule,
    ClientDashboardRoutingModule
  ]
})
export class ClientDashboardModule { }
