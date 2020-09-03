import { User } from '../models/auth';
import { CampaignType } from '../models/campaign';

export const normalUser: User = {
  email: 'abc@gmail.com',
  businessName: 'ABC LTD'
};

export const homeStatusCards = [
  {
    text: CampaignType.OnBoarding,
    value: 13,
    type: 'Campaign'
  }, {
    text: CampaignType.LpBuildChanges,
    value: 4,
    type: 'Campaign'
  }, {
    text: CampaignType.LpIr,
    value: 6,
    type: 'Campaign'
  }, {
    text: CampaignType.LpEr,
    value: 3,
    type: 'Campaign'
  }, {
    text: CampaignType.CampaignBuild,
    value: 10,
    type: 'Campaign'
  }, {
    text: CampaignType.InternalApproval,
    value: 3,
    type: 'Campaign'
  }, {
    text: CampaignType.Live,
    value: 3,
    type: 'Campaign'
  }, {
    text: CampaignType.Lost,
    value: 1,
    type: 'Campaign'
  },
];
