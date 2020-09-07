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
  @Input() headingClass= '';

  @ViewChild(HeadingTableComponent) table: HeadingTableComponent;
  @ViewChild('avatarColumn', {static: true}) avatarColumn: TemplateRef<any>;
  @ViewChild('detailColumn', {static: true}) detailColumn: TemplateRef<any>;
  @ViewChild('timeColumn', {static: true}) timeColumn: TemplateRef<any>;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('viewColumn', {static: true}) viewColumn: TemplateRef<any>;

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
      { label: 'Date', templateRef: this.avatarColumn, width: '70px' },
      { label: 'Detail', templateRef: this.detailColumn, width: '20%' },
      { label: 'Time', templateRef: this.timeColumn, width: '20%' },
      { label: 'Name', templateRef: this.nameColumn, width: '20%' },
      { templateRef: this.viewColumn, width: '150px' },
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

