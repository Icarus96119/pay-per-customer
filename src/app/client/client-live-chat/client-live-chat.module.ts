import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLiveChatRoutingModule } from './client-live-chat-routing.module';

import { ClientLiveChatComponent } from './client-live-chat.component';

@NgModule({
  declarations: [ClientLiveChatComponent],
  imports: [
    CommonModule,
    ClientLiveChatRoutingModule
  ]
})
export class ClientLiveChatModule { }
