import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PipesModule } from '../../ui-kit/pipes/pipes.module';
import { ButtonModule } from '../../ui-kit/button/button.module';
import { InputModule } from '../../ui-kit/input/input.module';
import { AvatarModule } from '../../ui-kit/avatar/avatar.module';

import { AdminTaskRoutingModule } from './admin-task-routing.module';

import { AdminTaskComponent } from './admin-task.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [
    AdminTaskComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
    ButtonModule,
    InputModule,
    AvatarModule,
    AdminTaskRoutingModule
  ]
})
export class AdminTaskModule { }
