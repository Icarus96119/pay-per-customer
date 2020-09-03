import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { ClientLayoutService } from './client-layout.service';

import { ROUTES } from '../../core/data/routes';
import { ScrollPosition } from '../../core/data/scroll-pos';

import { SidebarComponent } from '../layout-kit/sidebar/sidebar.component';

@Component({
  selector: 'app-client-layout',
  templateUrl: './client-layout.component.html',
  styleUrls: ['./client-layout.component.scss']
})
export class ClientLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild(SidebarComponent, { static: true }) sidebar: SidebarComponent;
  @ViewChild('admin_panel_container') adminPanelContainer: ElementRef;

  ScrollPosition = ScrollPosition;
  ROUTES = ROUTES;
  menus = [
    { icon: 'home', label: 'Dashboard', route: ROUTES.client.dashboard },
    { icon: 'speaker', label: 'Leads', route: ROUTES.client.lead },
    { icon: 'notification', label: 'Notifications', route: ROUTES.client.notification },
    { icon: 'appointment', label: 'Appointments', route: ROUTES.client.appointment },
    { icon: 'chat', label: 'Live Chat', route: ROUTES.client.liveChat },
    { icon: 'billing', label: 'Billing', route: ROUTES.client.billing },
    { icon: 'profile', label: 'My Profile', route: ROUTES.client.myProfile },
  ];
  constructor(
    private clientLayoutService: ClientLayoutService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.clientLayoutService.setAdminPanelContainer(this.adminPanelContainer);
  }

  toggleSidebar(): void {
    this.sidebar.toggle();
  }

}
