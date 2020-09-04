import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../../../ui-kit/table/table.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { PaymentTableComponent } from './payment-table.component';

@NgModule({
  declarations: [
    PaymentTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputModule,
    ButtonModule,
    PipesModule
  ],
  exports: [
    PaymentTableComponent
  ]
})
export class PaymentTableModule { }
