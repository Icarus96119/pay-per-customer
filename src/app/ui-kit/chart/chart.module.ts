import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AdvancedPieChartComponent } from './advanced-pie-chart/advanced-pie-chart.component';

@NgModule({
  declarations: [
    AdvancedPieChartComponent
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    AdvancedPieChartComponent
  ]
})
export class ChartModule { }
