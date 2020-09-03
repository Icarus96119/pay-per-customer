import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../../core/models/option';

@Component({
  selector: 'app-admin-billing-invoice',
  templateUrl: './admin-billing-invoice.component.html',
  styleUrls: ['./admin-billing-invoice.component.scss']
})
export class AdminBillingInvoiceComponent implements OnInit {

  options: Option<string>[] = [
    { value: 'All', label: 'All Invoices'},
    { value: 'None', label: 'No Invoice'}
  ];

  invoiceForm: FormGroup = this.fb.group({
    invoiceType: '',
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  filter(event): void {
    alert('Filter working');
  }

}
