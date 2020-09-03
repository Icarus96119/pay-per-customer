import { Entity } from './base';
import { CreditCard } from './payment';

export interface LoginResponse {
  accessToken: string;
}

export enum UserRole {
  Customer = 'CUSTOMER',
  Admin = 'ADMIN',
}

export interface User extends Entity {
  email: string;
  isEmailVerified?: boolean;
  role?: UserRole;
  name?: string;
  address?: string;
  businessName?: string;
  phone?: string;
  creditCard?: CreditCard;
  stripeCustomerId?: string;
}
