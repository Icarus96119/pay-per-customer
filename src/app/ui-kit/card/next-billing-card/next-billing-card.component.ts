import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-next-billing-card',
  templateUrl: './next-billing-card.component.html',
  styleUrls: ['./next-billing-card.component.scss']
})
export class NextBillingCardComponent implements OnInit {

  @Input() price: number;
  @Input() text: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
