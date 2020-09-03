import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartModule } from '../../ui-kit/chart/chart.module';

import { AdminReportRoutingModule } from './admin-report-routing.module';

import { AdminReportComponent } from './admin-report.component';

@NgModule({
  declarations: [
    AdminReportComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    AdminReportRoutingModule
  ]
})
export class AdminReportModule { }
