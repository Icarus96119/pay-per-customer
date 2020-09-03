import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CommonUiKitModule
  ]
})
export class HeadingTableModule { }
