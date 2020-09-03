import { Component, OnInit } from '@angular/core';

import { CreditCard } from '../../core/models/payment';
import { normalUser } from '../../core/data/consts';

@Component({
  selector: 'app-client-billing',
  templateUrl: './client-billing.component.html',
  styleUrls: ['./client-billing.component.scss']
})
export class ClientBillingComponent implements OnInit {

  card: CreditCard = {
    cardHolderName: '',
    cardName: 'master',
    cardNumber: '**** **** **** 3542',
    yy: 'Expires: 09/25',
    mm: '',
    cvv: ''
  }
  normalUser = normalUser;

  constructor() { }

  ngOnInit(): void {
  }

}
