import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CreditCard } from '../../core/models/payment';
import { normalUser } from '../../core/data/consts';
import { Option } from '../../core/models/option';

@Component({
  selector: 'app-client-billing',
  templateUrl: './client-billing.component.html',
  styleUrls: ['./client-billing.component.scss']
})
export class ClientBillingComponent implements OnInit {

  options: Option<string>[] = [
    { value: 'today', label: 'Today'},
  ];

  paymentForm: FormGroup = this.fb.group({
    sortByDate: '',
  });

  card: CreditCard = {
    cardHolderName: '',
    cardName: 'master',
    cardNumber: '**** **** **** 3542',
    yy: 'Expires: 09/25',
    mm: '',
    cvv: ''
  }
  normalUser = normalUser;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  filter(event): void {
    alert('Filter Working');
  }

}
