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

export enum CampaignDetailCardType {
  TotalPayments = 'TOTAL_PAYMENTS',
  MaxAdSpend = 'MAX._AD_SPEND',
  NoOfTopUps = 'NO._OF_TOP_UPS',
  LastTopUp = 'LAST_TOP_UP',
  ContractSigned = 'CONTRACT_SIGNED',
  InvoicesDue = 'INVOICES_DUE',
  SalesPerson = 'SALES_PERSON',
  AccountManager = 'ACCOUNT_MANAGER',
}

export interface CampaignDetailCard {
  type: CampaignDetailCardType,
  isCurrency: boolean,
  value: string | number;
}

export interface Campaign extends Entity {
  user: User;
  paymentsTotal: number;
  maxAdSpend: number;
  numberOfTopUps: number;
  daysSinceLastTopUp: number;
}
