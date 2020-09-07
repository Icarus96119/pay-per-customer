import { User } from './auth';
import { Entity } from './base';
import { CommunicationType } from './email-chat';

export enum TaskStep {
  Open = 'OPEN',
  In_Progress = 'IN_PROGRESS',
  Completed = 'COMPLETED'
}

export interface Task extends Entity{
  isCarriedOut: boolean;
  user: User;
  title: string;
}
