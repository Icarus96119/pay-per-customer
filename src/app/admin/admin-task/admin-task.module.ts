import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';
import { CardModule } from '../../ui-kit/card/card.module';

import { AdminTaskRoutingModule } from './admin-task-routing.module';

import { AdminTaskComponent } from './admin-task.component';

@NgModule({
  declarations: [
    AdminTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ButtonModule,
    InputModule,
    AvatarModule,
    CardModule,
    AdminTaskRoutingModule
  ]
})
export class AdminTaskModule { }
