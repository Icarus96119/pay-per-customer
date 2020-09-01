import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutKitModule } from '../layout-kit/layout-kit.module';
import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { AdminLayoutComponent } from './admin-layout.component';

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutKitModule,
    PipesModule
  ],
  exports: [
    AdminLayoutComponent
  ]
})
export class AdminLayoutModule { }
