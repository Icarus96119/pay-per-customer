import { Component, OnInit } from '@angular/core';

import { homeStatusCards } from '../../core/data/consts';

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  homeStatusCards = homeStatusCards;

  constructor() { }

  ngOnInit(): void {
  }

}
