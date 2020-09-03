import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../icon/icon.module';

import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  declarations: [
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [
    IconButtonComponent
  ]
})
export class ButtonModule { }
