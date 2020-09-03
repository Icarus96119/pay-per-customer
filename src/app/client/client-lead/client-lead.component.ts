import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Option } from '../../core/models/option';

@Component({
  selector: 'app-client-lead',
  templateUrl: './client-lead.component.html',
  styleUrls: ['./client-lead.component.scss']
})
export class ClientLeadComponent implements OnInit {

  options: Option<string>[] = [
    { value: 'today', label: 'Today'},
  ];

  leadForm: FormGroup = this.fb.group({
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
