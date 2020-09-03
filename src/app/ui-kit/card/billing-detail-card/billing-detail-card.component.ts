import { Component, OnInit, Input } from '@angular/core';

import { CreditCard } from '../../../core/models/payment';
import { User } from '../../../core/models/auth';

@Component({
  selector: 'app-billing-detail-card',
  templateUrl: './billing-detail-card.component.html',
  styleUrls: ['./billing-detail-card.component.scss']
})
export class BillingDetailCardComponent implements OnInit {

  @Input() card: CreditCard;
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
