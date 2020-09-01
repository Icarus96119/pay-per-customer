import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminEmailChatRoutingModule } from './admin-email-chat-routing.module';

import { AdminEmailChatComponent } from './admin-email-chat.component';

@NgModule({
  declarations: [AdminEmailChatComponent],
  imports: [
    CommonModule,
    AdminEmailChatRoutingModule
  ]
})
export class AdminEmailChatModule { }
