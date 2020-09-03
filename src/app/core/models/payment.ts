import { Entity } from './base';

export interface CreditCard extends Entity {
  cardHolderName: string;
  cardName: string;
  cardNumber: string;
  yy: string;
  mm: string;
  cvv: string;
}

export enum PaymentMethod {
  BankTransfer = 'BANK_TRANSFER',
  Card = 'CARD',
}