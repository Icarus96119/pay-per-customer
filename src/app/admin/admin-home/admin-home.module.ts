import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from '../../ui-kit/card/card.module';
import { AppointmentTableModule } from '../../ui-kit/table/appointment-table/appointment-table.module';
import { TaskTableModule } from '../../ui-kit/table/task-table/task-table.module';
import { ChartModule } from '../../ui-kit/chart/chart.module';

import { AdminHomeRoutingModule } from './admin-home-routing.module';

import { AdminHomeComponent } from './admin-home.component';

@NgModule({
  declarations: [
    AdminHomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    AppointmentTableModule,
    TaskTableModule,
    ChartModule,
    AdminHomeRoutingModule
  ]
})
export class AdminHomeModule { }
