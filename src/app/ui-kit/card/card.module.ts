import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

import { StatusCardComponent } from './status-card/status-card.component';

@NgModule({
  declarations: [
    StatusCardComponent
  ],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports: [
    StatusCardComponent
  ]
})
export class CardModule { }
