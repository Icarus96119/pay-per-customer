import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { ColorPipe } from './color.pipe';
import { TimeAgoPipe } from './time-ago.pipe';
import { OptionLabelPipe } from './option-label.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    ColorPipe,
    TimeAgoPipe,
    OptionLabelPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    ColorPipe,
    TimeAgoPipe,
    OptionLabelPipe
  ]
})
export class PipesModule { }
