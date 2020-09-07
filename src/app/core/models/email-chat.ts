import { User } from './auth';

export enum CommunicationStep {
  Open = 'OPEN',
  InReview = 'IN_REVIEW',
  Closed = 'CLOSED'
}

export enum CommunicationType {
  Email = 'EMAIL',
  Chat = 'CHAT'
}

export interface EmailChatCardInfo {
  type: CommunicationType;
  receivedDate: string;
  lastCommunicationDate: string;
  subject: string;
  sender: User;
  receiver: User;
}