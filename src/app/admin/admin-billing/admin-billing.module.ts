import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';

import { AdminBillingRoutingModule } from './admin-billing-routing.module';

import { AdminBillingComponent } from './admin-billing.component';

@NgModule({
  declarations: [AdminBillingComponent],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule,
    AdminBillingRoutingModule
  ]
})
export class AdminBillingModule { }
