import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'app-notification-box',
  templateUrl: './notification-box.component.html',
  styleUrls: ['./notification-box.component.scss']
})
export class NotificationBoxComponent implements OnInit {

  @Input() events: Event[] = new Array(5);
  @Input() isLoading: boolean;
  @Output() closeBox: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
