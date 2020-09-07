import { Component, OnInit } from '@angular/core';

import { clientDashboardStatusCards } from '../../core/data/consts';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  clientDashboardStatusCards = clientDashboardStatusCards;

  constructor() { }

  ngOnInit(): void {
  }

}
