import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingTableModule } from '../heading-table/heading-table.module';
import { InputModule } from '../../input/input.module';

import { TaskTableComponent } from './task-table.component';

@NgModule({
  declarations: [
    TaskTableComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    HeadingTableModule
  ],
  exports: [
    TaskTableComponent
  ]
})
export class TaskTableModule { }
