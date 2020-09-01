import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientNotificationRoutingModule } from './client-notification-routing.module';

import { ClientNotificationComponent } from './client-notification.component';

@NgModule({
  declarations: [ClientNotificationComponent],
  imports: [
    CommonModule,
    ClientNotificationRoutingModule
  ]
})
export class ClientNotificationModule { }
