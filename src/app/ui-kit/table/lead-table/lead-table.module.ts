import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from '../table.module';
import { InputModule } from '../../input/input.module';
import { ButtonModule } from '../../button/button.module';
import { PipesModule } from '../../pipes/pipes.module';

import { LeadTableComponent } from './lead-table.component';

@NgModule({
  declarations: [
    LeadTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    InputModule,
    ButtonModule,
    PipesModule
  ],
  exports: [
    LeadTableComponent
  ]
})
export class LeadTableModule { }
