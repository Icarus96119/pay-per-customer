import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../core/models/option';

@Component({
  selector: 'app-client-notification',
  templateUrl: './client-notification.component.html',
  styleUrls: ['./client-notification.component.scss']
})
export class ClientNotificationComponent implements OnInit {

  options: Option<string>[] = [
    { value: 'today', label: 'Today'},
  ];

  smsForm: FormGroup = this.fb.group({
    sortByDate: '',
  });

  notificationForm: FormGroup = this.fb.group({
    sortByDate: '',
  });

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  filter(event): void {
    alert('Filter Working');
  }

}
