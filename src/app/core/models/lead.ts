import { Entity } from './base';
import { User } from './auth';

export enum LeadStatus {
  Sold = 'SOLD',
  DidNotBuy = 'DID_NOT_BUY',
  Spam = 'SPAM',
  Pending = 'PENDING'
}

export interface Lead extends Entity {
  status: LeadStatus;
  user: User;
  code: string;
}
