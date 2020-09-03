import { User } from './auth';
import { Entity } from './base';

export interface Appointment extends Entity{
  date: string;
  time: string;
  user: User;
  contractor: User;
  title: string;
  detail: string;
}