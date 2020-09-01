import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientMyProfileRoutingModule } from './client-my-profile-routing.module';

import { ClientMyProfileComponent } from './client-my-profile.component';

@NgModule({
  declarations: [ClientMyProfileComponent],
  imports: [
    CommonModule,
    ClientMyProfileRoutingModule
  ]
})
export class ClientMyProfileModule { }
