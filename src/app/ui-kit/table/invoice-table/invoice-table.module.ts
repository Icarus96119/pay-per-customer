import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { InputModule } from '../../input/input.module';
import { PipesModule } from '../../pipes/pipes.module';

import { InvoiceTableComponent } from './invoice-table.component';

@NgModule({
  declarations: [
    InvoiceTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputModule,
    PipesModule
  ],
  exports: [
    InvoiceTableComponent
  ]
})
export class InvoiceTableModule { }

