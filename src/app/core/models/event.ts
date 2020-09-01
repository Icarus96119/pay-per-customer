import { Entity } from './base';

export interface Event extends Entity {
  title: string;
  message: string;
  readAt?: string;
}