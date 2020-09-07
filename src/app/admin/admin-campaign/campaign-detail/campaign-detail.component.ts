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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

}
