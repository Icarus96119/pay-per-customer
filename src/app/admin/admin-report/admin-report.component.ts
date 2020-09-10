import { Component, OnInit } from '@angular/core';
import { Option } from '../../core/models/option';

@Component({
  selector: 'app-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.scss']
})
export class AdminReportComponent implements OnInit {

  revenueOptions: Option<string>[] = [
    { value: 'year', label: 'This Year'},
  ];

  revenueChartOptions = {
    chart: {
      type: 'spline'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis:{
      categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title:{
        text:''
      }
    },
    tooltip: {
      valueSuffix:' °C'
    },
    series: [
      {
        name: '',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
      },
    ]
  };

  billingChartOptions = {
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

  businessChartOptions = {
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
      categories: ['Denny', 'John', 'David', 'Adam', 'Mike', 'James'],
      title: { text: null }
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
      }
    },
    credits:{
      enabled: false
    },
    series: [
      {
        name: 'New Business Team Performance',
        data: [973, 914, 4054, 732, 34, 423]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
