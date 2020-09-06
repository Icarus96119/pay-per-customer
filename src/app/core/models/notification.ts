import { Entity } from './base';
import { User } from './auth';

export interface Sms extends Entity {
  sender: User;
  receiver: User;
  content: string;
}

export interface Email extends Entity {
  sender: User;
  receiver: User;
  content: string;
}