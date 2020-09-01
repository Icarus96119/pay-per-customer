import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAgreementRoutingModule } from './admin-agreement-routing.module';

import { AdminAgreementComponent } from './admin-agreement.component';

@NgModule({
  declarations: [AdminAgreementComponent],
  imports: [
    CommonModule,
    AdminAgreementRoutingModule
  ]
})
export class AdminAgreementModule { }
