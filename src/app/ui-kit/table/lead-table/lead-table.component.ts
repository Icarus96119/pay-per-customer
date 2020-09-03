import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Lead, LeadStatus} from '../../../core/models/lead';
import { allLeads } from '../../../core/data/leads';

@Component({
  selector: 'app-lead-table',
  templateUrl: './lead-table.component.html',
  styleUrls: ['./lead-table.component.scss']
})
export class LeadTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('nameColumn', {static: true}) nameColumn: TemplateRef<any>;
  @ViewChild('contactColumn', {static: true}) contactColumn: TemplateRef<any>;
  @ViewChild('emailColumn', {static: true}) emailColumn: TemplateRef<any>;
  @ViewChild('codeColumn', {static: true}) codeColumn: TemplateRef<any>;
  @ViewChild('statusColumn', {static: true}) statusColumn: TemplateRef<any>;
  @ViewChild('viewColumn', {static: true}) viewColumn: TemplateRef<any>;

  LeadStatus = LeadStatus;
  allLeads = allLeads;

  columns: TableColumn[];
  isLoading = false;
  total = allLeads.length;
  skip = 0;
  take = PageSizeDefault;
  campaignSubscriptions: Lead[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Name', templateRef: this.nameColumn, width: '20%' },
      { label: 'Contact', templateRef: this.contactColumn, width: '15%' },
      { label: 'Email', templateRef: this.emailColumn, width: '20%' },
      { label: 'Code', templateRef: this.codeColumn, width: '10%'},
      { label: 'Status', templateRef: this.statusColumn, width: '150px' },
      { templateRef: this.viewColumn, width: '150px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent): void {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  loadContracts(): void {
    this.campaignSubscriptions = allLeads.slice(this.skip, this.skip + this.take);
  }
}


