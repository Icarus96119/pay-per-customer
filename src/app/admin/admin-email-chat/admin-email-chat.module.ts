import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';

import { AdminEmailChatRoutingModule } from './admin-email-chat-routing.module';

import { AdminEmailChatComponent } from './admin-email-chat.component';
import { EmailChatCardComponent } from './email-chat-card/email-chat-card.component';

@NgModule({
  declarations: [
    AdminEmailChatComponent,
    EmailChatCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    ButtonModule,
    InputModule,
    AvatarModule,
    AdminEmailChatRoutingModule
  ]
})
export class AdminEmailChatModule { }
