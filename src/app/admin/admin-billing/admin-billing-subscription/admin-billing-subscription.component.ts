import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../../core/models/option';

@Component({
  selector: 'app-admin-billing-subscription',
  templateUrl: './admin-billing-subscription.component.html',
  styleUrls: ['./admin-billing-subscription.component.scss']
})
export class AdminBillingSubscriptionComponent implements OnInit {

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
