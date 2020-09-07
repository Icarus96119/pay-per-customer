import { Component, OnInit } from '@angular/core';

import { CommunicationStep } from '../../core/models/email-chat';
import { emailChatData } from '../../core/data/email-chat';

@Component({
  selector: 'app-email-chat',
  templateUrl: './admin-email-chat.component.html',
  styleUrls: ['./admin-email-chat.component.scss']
})
export class AdminEmailChatComponent implements OnInit {

  CommunicationStep = CommunicationStep;
  emailChatData = emailChatData;

  constructor() { }

  ngOnInit(): void {
  }

  newEmail(event): void {
    alert('New Email');
  }

  newChat(event): void {
    alert('New Chat');
  }

}
