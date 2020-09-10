import { Component, OnInit } from '@angular/core';

import { clientDashboardStatusCards } from '../../core/data/consts';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  clientDashboardStatusCards = clientDashboardStatusCards;

  leadReportChartOptions = {
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
      categories: ['Client 01'], title: {
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
        data: [107]
      },
      {
        name: `Didn't buy`,
        data: [133]
      },
      {
        name: 'Booked',
        data: [973]
      },
      {
        name: 'Sold',
        data: [133]
      },
      {
        name: 'Unresponsive',
        data: [107]
      },
      {
        name: 'Spam',
        data: [973]
      }
    ]
  };

  leadStatusChartOptions = {
    chart : {
      plotBorderWidth: null,
      plotShadow: false
    },
    title : {
      text: ''
    },
    tooltip : {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions : {
      pie: {
        shadow: false,
        center: ['50%', '50%'],
        size:'45%',
        innerSize: '20%'
      }
    },
    series : [{
      type: 'pie',
      name: 'Browser share',
      data: [
        ['Pending', 45.0],
        [`Didn't Buy`, 26.8],
        ['Booked', 10.23],
        ['Sold', 5.98],
        ['Unresponsive', 0.00],
        ['Spam', 0.00]
      ]
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
