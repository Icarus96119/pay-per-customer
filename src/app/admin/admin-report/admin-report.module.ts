import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminReportRoutingModule } from './admin-report-routing.module';

import { AdminReportComponent } from './admin-report.component';

@NgModule({
  declarations: [AdminReportComponent],
  imports: [
    CommonModule,
    AdminReportRoutingModule
  ]
})
export class AdminReportModule { }
