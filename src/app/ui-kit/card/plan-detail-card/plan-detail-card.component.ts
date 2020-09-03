import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-detail-card',
  templateUrl: './plan-detail-card.component.html',
  styleUrls: ['./plan-detail-card.component.scss']
})
export class PlanDetailCardComponent implements OnInit {

  @Input() billingCycle;
  @Input() startDate;
  @Input() status;


  constructor() { }

  ngOnInit(): void {
  }

}
