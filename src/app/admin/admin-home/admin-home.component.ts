import { Component, OnInit } from '@angular/core';

import { adminHomeStatusCards } from '../../core/data/consts';

@Component({
  selector: 'app-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  homeStatusCards = adminHomeStatusCards;

  constructor() { }

  ngOnInit(): void {
  }

}
