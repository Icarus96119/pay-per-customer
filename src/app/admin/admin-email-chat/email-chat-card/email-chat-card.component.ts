import { Component, OnInit, Input } from '@angular/core';

import { EmailChatCardInfo } from '../../../core/models/email-chat';

@Component({
  selector: 'app-email-chat-card',
  templateUrl: './email-chat-card.component.html',
  styleUrls: ['./email-chat-card.component.scss']
})
export class EmailChatCardComponent implements OnInit {

  @Input() info: EmailChatCardInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
