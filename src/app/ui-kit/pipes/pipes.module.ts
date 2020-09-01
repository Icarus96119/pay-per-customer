import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteToAbsolutePipe } from './route-to-absolute.pipe';
import { ColorPipe } from './color.pipe';
import { TimeAgoPipe } from './time-ago.pipe';

@NgModule({
  declarations: [
    RouteToAbsolutePipe,
    ColorPipe,
    TimeAgoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RouteToAbsolutePipe,
    ColorPipe,
    TimeAgoPipe
  ]
})
export class PipesModule { }
