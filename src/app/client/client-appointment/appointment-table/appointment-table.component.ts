import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { HeadingTableComponent } from '../../../ui-kit/table/heading-table/heading-table.component';

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

  @ViewChild(HeadingTableComponent) table: HeadingTableComponent;
  @ViewChild('titleColumn', {static: true}) titleColumn: TemplateRef<any>;
  @ViewChild('dateColumn', {static: true}) dateColumn: TemplateRef<any>;
  @ViewChild('timeColumn', {static: true}) timeColumn: TemplateRef<any>;
  @ViewChild('memberColumn', {static: true}) memberColumn: TemplateRef<any>;
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
      { label: '', templateRef: this.titleColumn, width: '20%' },
      { label: 'Date', templateRef: this.dateColumn, width: '150px' },
      { label: 'Time', templateRef: this.timeColumn, width: '20%' },
      { label: 'Member of Staff', templateRef: this.memberColumn, width: '150px' },
      { templateRef: this.detailColumn, width: '150px' },
    ];
    this.loadContracts();
  }

  loadContracts(): void {
    this.appointments = this.appointments.map(appointment => {
      const rows = appointment.rows.map(row => { return { ...row, hover: false } });
      appointment.rows = rows;
      return appointment;
    });
  }
}

