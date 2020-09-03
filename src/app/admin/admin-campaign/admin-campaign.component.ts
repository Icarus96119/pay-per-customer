import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { enumToOptions } from '../../core/utils/enum.util';
import { CampaignType } from '../../core/models/campaign';

@Component({
  selector: 'app-campaign',
  templateUrl: './admin-campaign.component.html',
  styleUrls: ['./admin-campaign.component.scss']
})
export class AdminCampaignComponent implements OnInit {

  campaignOptions = enumToOptions<CampaignType>(CampaignType, null, true);

  campaignForm: FormGroup = this.fb.group({
    campaignType: '',
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
