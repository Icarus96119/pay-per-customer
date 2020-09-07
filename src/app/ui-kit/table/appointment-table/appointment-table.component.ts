import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { HeadingTableComponent } from '../heading-table/heading-table.component';

import { TableColumn } from '../../../core/models/table';
import { ToastrService } from '../../../core/services/toastr.service';

import { appointments } from '../../../core/data/appointment';

@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.scss']
})
export class AppointmentTableComponent implements OnInit {

  @Input() canAdd = false;
  @Input() headingClass= '';

  @ViewChild(HeadingTableComponent) table: HeadingTableComponent;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('titleColumn', {static: true}) titleColumn: TemplateRef<any>;
  @ViewChild('timeColumn', {static: true}) timeColumn: TemplateRef<any>;
  @ViewChild('detailColumn', {static: true}) detailColumn: TemplateRef<any>;

  title = `Appointment`;
  appointments = appointments;

  columns: TableColumn[];
  isLoading = false;

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Date', templateRef: this.dateColumn, width: '150px' },
      { label: 'Detail', templateRef: this.titleColumn, width: '50%' },
      { label: 'Time', templateRef: this.timeColumn, width: '70px' },
      { templateRef: this.detailColumn, width: '150px' },
    ];
  }
}

