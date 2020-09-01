import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutKitModule } from '../layout-kit/layout-kit.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { ClientLayoutComponent } from './client-layout.component';

@NgModule({
  declarations: [
    ClientLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutKitModule,
    PipesModule
  ],
  exports: [
    ClientLayoutComponent
  ]
})
export class ClientLayoutModule { }
