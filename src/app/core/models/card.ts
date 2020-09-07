import { CampaignType } from './campaign';

export interface AdminHomeCard {
  text: CampaignType,
  value: number,
  type: string
}

export interface ClientDashboardCard {
  icon: string,
  value: number,
  isCurrency: boolean
  text: string,
  valueColor: string,
}