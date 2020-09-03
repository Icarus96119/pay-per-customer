import { User } from './auth';
import { Entity } from './base';

export interface Task extends Entity{
  isCarriedOut: boolean;
  user: User;
  title: string;
}