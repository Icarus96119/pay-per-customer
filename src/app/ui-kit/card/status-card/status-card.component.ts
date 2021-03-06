import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdminHomeCard } from '../../../core/models/card';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent implements OnInit {

  @Input() info: AdminHomeCard;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}

