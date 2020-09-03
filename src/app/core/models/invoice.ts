import { Entity } from './base';
import { User } from './auth';

export enum InvoiceStatus {
  Paid = 'PAID',
  Due = 'DUE',
}

export enum InvoiceType {
  Recurring = 'RECURRING',
}

export interface Invoice extends Entity {
  status: InvoiceStatus;
  amount : number;
  serialId: string;
  user: User;
  issuedOn: string;
  paidOn: string;
  paymentRetry: string;
  voidedOn: string;
  type: InvoiceType
}