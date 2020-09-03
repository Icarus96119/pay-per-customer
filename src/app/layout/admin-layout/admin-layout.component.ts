import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { AdminLayoutService } from './admin-layout.service';

import { ROUTES } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';

import { SidebarComponent } from '../layout-kit/sidebar/sidebar.component';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild(SidebarComponent, { static: true }) sidebar: SidebarComponent;
  @ViewChild('admin_panel_container') adminPanelContainer: ElementRef;

  ScrollPosition = ScrollPosition;
  ROUTES = ROUTES;
  menus = [
    { icon: 'home', label: 'Home', route: ROUTES.admin.home },
    { icon: 'speaker', label: 'Campaigns', route: ROUTES.admin.campaign },
    { icon: 'email', label: 'Email & Chat', route: ROUTES.admin.email },
    { icon: 'task', label: 'Tasks', route: ROUTES.admin.task },
    { icon: 'appointment', label: 'Appointments', route: ROUTES.admin.appointment },
    { icon: 'billing', label: 'Billing', route: ROUTES.admin.billing.root },
    { icon: 'agreement', label: 'Agreements', route: ROUTES.admin.agreement },
    { icon: 'report', label: 'Reports', route: ROUTES.admin.report },
  ];
  constructor(
    private adminLayoutService: AdminLayoutService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.adminLayoutService.setAdminPanelContainer(this.adminPanelContainer);
  }

  toggleSidebar(): void {
    this.sidebar.toggle();
  }

}
