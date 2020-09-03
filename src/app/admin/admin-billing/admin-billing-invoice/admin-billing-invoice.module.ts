import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '../../../ui-kit/button/button.module';
import { InputModule } from '../../../ui-kit/input/input.module';
import { InvoiceTableModule } from '../../../ui-kit/table/invoice-table/invoice-table.module';

import { AdminBillingInvoiceRoutingModule } from './admin-billing-invoice-routing.module';

import { AdminBillingInvoiceComponent } from './admin-billing-invoice.component';

@NgModule({
  declarations: [
    AdminBillingInvoiceComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputModule,
    InvoiceTableModule,
    AdminBillingInvoiceRoutingModule
  ]
})
export class AdminBillingInvoiceModule { }
