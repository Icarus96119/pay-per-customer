import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../ui-kit/chart/chart.module';
import { InputModule } from '../../ui-kit/input/input.module';

import { AdminReportRoutingModule } from './admin-report-routing.module';

import { AdminReportComponent } from './admin-report.component';

@NgModule({
  declarations: [
    AdminReportComponent,
  ],
  imports: [
    CommonModule,
    ChartModule,
    InputModule,
    AdminReportRoutingModule
  ]
})
export class AdminReportModule { }
