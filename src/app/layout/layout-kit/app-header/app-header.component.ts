import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<any> = new EventEmitter<any>();

  ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
