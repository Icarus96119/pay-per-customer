import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../../../ui-kit/table/table.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { SmsTableComponent } from './sms-table.component';

@NgModule({
  declarations: [
    SmsTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputModule,
    ButtonModule,
    PipesModule
  ],
  exports: [
    SmsTableComponent
  ]
})
export class SmsTableModule { }
