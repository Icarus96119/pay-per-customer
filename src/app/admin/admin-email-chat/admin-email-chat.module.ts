import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { CardModule } from '../../ui-kit/card/card.module';

import { AdminEmailChatRoutingModule } from './admin-email-chat-routing.module';

import { AdminEmailChatComponent } from './admin-email-chat.component';

@NgModule({
  declarations: [
    AdminEmailChatComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ButtonModule,
    InputModule,
    AvatarModule,
    CardModule,
    AdminEmailChatRoutingModule
  ]
})
export class AdminEmailChatModule { }
