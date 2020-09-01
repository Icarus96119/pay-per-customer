import { Component, OnInit, Input } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';

import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() sidebar: SidebarComponent;

  ROUTES = ROUTES;

  constructor() { }

  ngOnInit(): void {
  }

}
