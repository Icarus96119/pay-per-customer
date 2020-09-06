import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../../../ui-kit/table/table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Sms } from '../../../core/models/notification';
import { allSms } from '../../../core/data/notification';

@Component({
  selector: 'app-sms-table',
  templateUrl: './sms-table.component.html',
  styleUrls: ['./sms-table.component.scss']
})
export class SmsTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('createdAtColumn', {static: true}) createdAtColumn: TemplateRef<any>;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('phoneNumberColumn', {static: true}) phoneNumberColumn: TemplateRef<any>;
  @ViewChild('actionColumn', {static: true}) actionColumn: TemplateRef<any>;

  allSms = allSms;

  columns: TableColumn[];
  isLoading = false;
  total = allSms.length;
  skip = 0;
  take = PageSizeDefault;
  sms: Sms[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Date Created', templateRef: this.createdAtColumn, width: '20%' },
      { label: 'Name', templateRef: this.nameColumn, width: '20%' },
      { label: 'Phone Number', templateRef: this.phoneNumberColumn, width: '20%'},
      { templateRef: this.actionColumn, width: '350px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent): void {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  loadContracts(): void {
    this.sms = allSms.slice(this.skip, this.skip + this.take);
  }
}


