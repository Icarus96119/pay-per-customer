import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadingTableModule } from '../../../ui-kit/table/heading-table/heading-table.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { ButtonModule } from '../../../ui-kit/button/button.module';
import { PipesModule } from '../../../ui-kit/pipes/pipes.module';
import { AvatarModule } from '../../../ui-kit/avatar/avatar.module';

import { AppointmentTableComponent } from './appointment-table.component';

@NgModule({
  declarations: [
    AppointmentTableComponent
  ],
  imports: [
    CommonModule,
    HeadingTableModule,
    InputModule,
    ButtonModule,
    PipesModule,
    AvatarModule
  ],
  exports: [
    AppointmentTableComponent
  ]
})
export class AppointmentTableModule { }


