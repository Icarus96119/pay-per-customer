import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { enumToOptions } from '../../../core/utils/enum.util';
import { CampaignDetailType } from '../../../core/models/campaign';
import { campaignDetailCards } from '../../../core/data/campaign';
import { CommunicationStep } from '../../../core/models/email-chat';
import { emailChatData } from '../../../core/data/email-chat';

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {

  campaign = this.route.snapshot.data;
  campaignDetailCards = campaignDetailCards;
  CommunicationStep = CommunicationStep;
  emailChatData = emailChatData;

  campaignDetailOptions = enumToOptions<CampaignDetailType>(CampaignDetailType, null, true);

  campaignDetailForm: FormGroup = this.fb.group({
    campaignDetailType: '',
  });

  campaignReportChartOptions = {
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
      categories: ['Client 01'],
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
        name: `Didn't Buy`,
        data: [133]
      },
      {
        name: 'Booked',
        data: [973]
      },
      {
        name: 'Sold',
        data: [973]
      },
      {
        name: 'Unresponsive',
        data: [973]
      },
      {
        name: 'Spam',
        data: [973]
      }
    ]
  };

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
