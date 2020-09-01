import { Component, Input, OnInit } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() menus = [];
  @Input() isAdmin = true;

  ROUTES = ROUTES;
  isCollapsed = true;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
