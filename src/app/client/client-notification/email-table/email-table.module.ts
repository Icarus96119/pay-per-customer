import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../../../ui-kit/table/table.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';

import { EmailTableComponent } from './email-table.component';

@NgModule({
  declarations: [
    EmailTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputModule,
    ButtonModule,
    PipesModule
  ],
  exports: [
    EmailTableComponent
  ]
})
export class EmailTableModule { }
