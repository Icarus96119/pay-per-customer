import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() chartOptions;
  @Input() height;

  highcharts = Highcharts;

  constructor() { }

  ngOnInit(): void {
  }

}
