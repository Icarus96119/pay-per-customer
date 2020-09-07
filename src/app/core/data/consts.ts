import { User } from '../models/auth';
import { CampaignType } from '../models/campaign';
import { AdminHomeCard, ClientDashboardCard } from '../models/card';

export const normalUser: User = {
  email: 'abc@gmail.com',
  businessName: 'ABC LTD',
  name: 'Jonathan Jones',
  phone: '654646464',
  address: '3250 Bloor Street West, Suit 600.'
};

export const adminHomeStatusCards: AdminHomeCard[] = [
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

export const clientDashboardStatusCards: ClientDashboardCard[] = [
  {
    icon: 'people',
    value: 68,
    isCurrency: false,
    valueColor: 'text-primary',
    text: 'Leads so far'
  }, {
    icon: 'calendar',
    value: 76,
    isCurrency: false,
    valueColor: 'text-success',
    text: 'Leads so far'
  }, {
    icon: 'bill',
    value: 757.50,
    isCurrency: true,
    valueColor: 'text-danger',
    text: 'Leads so far'
  }
]