import { Entity } from './base';
import { User } from './auth';

export enum CampaignType {
  OnBoarding = 'ONBOARDING',
  LpBuildChanges = 'LP_BUILD_/_CHANGES',
  LpIr = 'LP_IR',
  LpEr = 'LP_ER',
  CampaignBuild = 'CAMPAIGN_BUILD',
  InternalApproval = 'INTERNAL_APPROVAL',
  Live = 'LIVE',
  // Paused = 'PAUSED',
  Lost = 'LOST',
}

export enum CampaignDetailType {
  Logs = 'LOGS',
  Billing = 'BILLING',
  ViewLp = 'VIEW_LP',
  EditClient = 'EDIT_CLIENT',
}

export interface Campaign extends Entity {
  user: User;
  paymentsTotal: number;
  maxAdSpend: number;
  numberOfTopUps: number;
  daysSinceLastTopUp: number;
}
