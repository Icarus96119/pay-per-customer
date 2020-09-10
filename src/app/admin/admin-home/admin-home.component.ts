import { Component, OnInit } from '@angular/core';

import { adminHomeStatusCards } from '../../core/data/consts';

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  homeStatusCards = adminHomeStatusCards;

  campaignChartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: ''
    },
    subtitle : {
      text: ''
    },
    xAxis:{
      categories: ['Client 05', 'Client 04', 'Client 03', 'Client 02', 'Client 01'], title: {
        text: null
      }
    },
    yAxis : {
      min: 0, title: {
        text: 'Population (millions)', align: 'high'
      },
      labels: {
        overflow: 'justify'
      }
    },
    tooltip : {
      valueSuffix: ' millions'
    },
    plotOptions : {
      bar: {
        dataLabels: {
          enabled: true
        }
      },
      series: {
        stacking: 'normal'
      }
    },
    credits:{
      enabled: false
    },
    series: [
      {
        name: 'Pending',
        data: [107, 31, 635, 203, 2]
      },
      {
        name: `Didn't Buy`,
        data: [133, 156, 947, 408, 6]
      },
      {
        name: 'Booked',
        data: [973, 914, 4054, 732, 34]
      },
      {
        name: 'Sold',
        data: [973, 914, 4054, 732, 34]
      },
      {
        name: 'Unresponsive',
        data: [973, 914, 4054, 732, 34]
      },
      {
        name: 'Spam',
        data: [973, 914, 4054, 732, 34]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
