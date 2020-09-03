import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingTableModule } from '../../../ui-kit/table/heading-table/heading-table.module';

import { AppointmentTableComponent } from './appointment-table.component';

@NgModule({
  declarations: [
    AppointmentTableComponent
  ],
  imports: [
    CommonModule,
    HeadingTableModule
  ],
  exports: [
    AppointmentTableComponent
  ]
})
export class AppointmentTableModule { }
