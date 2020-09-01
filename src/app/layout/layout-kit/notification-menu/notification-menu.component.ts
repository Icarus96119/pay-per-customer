import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notification-menu',
  templateUrl: './notification-menu.component.html',
  styleUrls: ['./notification-menu.component.scss']
})
export class NotificationMenuComponent implements OnInit, OnDestroy {

  @ViewChild(NgbDropdown) dropdown: NgbDropdown;
  isLoading = false;
  isOpened = false;

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  openChanged(opened): void {
  }
}
