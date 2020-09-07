import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '../../icon/icon.module';
import { CommonUiKitModule } from '../../common-ui-kit/common-ui-kit.module';

import { HeadingTableComponent } from './heading-table.component';

@NgModule({
  declarations: [
    HeadingTableComponent
  ],
  exports: [
    HeadingTableComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    CommonUiKitModule
  ]
})
export class HeadingTableModule { }
