import { Entity } from './base';
import { User } from './auth';
import { PaymentMethod } from './payment';

export enum SubscriptionStatus {
  Paused = 'PAUSED',
  Cancelled = 'CANCELLED',
  Active = 'ACTIVE',
}

export interface Subscription extends Entity {
  status: SubscriptionStatus;
  user: User;
  paymentMethod: PaymentMethod;
  nextRenewal: string;
  renewalAmount: number;
  numberOfRenewals: number;
}
