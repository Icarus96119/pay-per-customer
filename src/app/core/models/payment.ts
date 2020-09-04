import { Entity } from './base';
import { User } from './auth';

export enum PaymentMethod {
  BankTransfer = 'BANK_TRANSFER',
  Card = 'CARD',
}

export enum PaymentStatus {
  Completed = 'COMPLETED',
  InComplete = 'INCOMPLETE'
}

export interface CreditCard extends Entity {
  cardHolderName: string;
  cardName: string;
  cardNumber: string;
  yy: string;
  mm: string;
  cvv: string;
}

export interface Payment extends Entity {
  index?: number;
  user: User;
  paymentNumber: string;
  paymentMethod: PaymentMethod;
  dateAndTime: string;
  amount: number;
  status: PaymentStatus;
}
