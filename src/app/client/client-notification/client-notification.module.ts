import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { SmsTableModule } from './sms-table/sms-table.module';
import { EmailTableModule } from './email-table/email-table.module';

import { ClientNotificationRoutingModule } from './client-notification-routing.module';

import { ClientNotificationComponent } from './client-notification.component';

@NgModule({
  declarations: [
    ClientNotificationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    SmsTableModule,
    EmailTableModule,
    ClientNotificationRoutingModule
  ]
})
export class ClientNotificationModule { }
