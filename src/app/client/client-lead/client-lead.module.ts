import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientLeadRoutingModule } from './client-lead-routing.module';

import { ClientLeadComponent } from './client-lead.component';

@NgModule({
  declarations: [ClientLeadComponent],
  imports: [
    CommonModule,
    ClientLeadRoutingModule
  ]
})
export class ClientLeadModule { }
