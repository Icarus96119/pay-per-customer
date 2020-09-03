import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';

import { TableComponent } from './table.component';
import { SubscriptionTableComponent } from './subscription-table/subscription-table.component';
@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
