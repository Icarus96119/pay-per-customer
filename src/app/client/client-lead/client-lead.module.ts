import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';

import { ClientLeadRoutingModule } from './client-lead-routing.module';

import { ClientLeadComponent } from './client-lead.component';

@NgModule({
  declarations: [
    ClientLeadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    ClientLeadRoutingModule
  ]
})
export class ClientLeadModule { }
