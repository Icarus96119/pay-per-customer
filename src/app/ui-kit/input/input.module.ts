import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { IconModule } from '../icon/icon.module';

import { SearchInputComponent } from './search-input/search-input.component';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    SelectComponent,
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    IconModule
  ],
  exports: [
    SearchInputComponent,
    SelectComponent,
    CheckboxComponent
  ]
})
export class InputModule { }
