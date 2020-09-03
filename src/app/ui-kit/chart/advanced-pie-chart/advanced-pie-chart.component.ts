import { Component, OnInit, Input } from '@angular/core';

import { chartColorSchema } from '../../../core/data/consts';
import { ChartItem } from '../../../core/models/base';

@Component({
  selector: 'app-advanced-pie-chart',
  templateUrl: './advanced-pie-chart.component.html',
  styleUrls: ['./advanced-pie-chart.component.scss']
})
export class AdvancedPieChartComponent implements OnInit {

  @Input() statistic: ChartItem[] = [
    { name: 'Germany', value: 8940000 },
    { name: 'USA', value: 5000000 },
    { name: 'UK', value: 1200000 },
  ];
  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#222e72', '#0632ee', '#3aafe6']
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
