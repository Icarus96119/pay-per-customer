import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Campaign } from '../../../core/models/campaign';
import { allCampaigns } from '../../../core/data/campaign';

@Component({
  selector: 'app-campaign-table',
  templateUrl: './campaign-table.component.html',
  styleUrls: ['./campaign-table.component.scss']
})
export class CampaignTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('businessNameColumn', {static: true}) businessNameColumn: TemplateRef<any>;
  @ViewChild('paymentsTotalColumn', {static: true}) paymentsTotalColumn: TemplateRef<any>;
  @ViewChild('maxAdSpendColumn', {static: true}) maxAdSpendColumn: TemplateRef<any>;
  @ViewChild('numberOfTopUpsColumn', {static: true}) numberOfTopUpsColumn: TemplateRef<any>;
  @ViewChild('daysSinceLastTopUpColumn', {static: true}) daysSinceLastTopUpColumn: TemplateRef<any>;
  @ViewChild('viewColumn', {static: true}) viewColumn: TemplateRef<any>;

  allCampaigns = allCampaigns;

  columns: TableColumn[];
  isLoading = false;
  total = allCampaigns.length;
  skip = 0;
  take = PageSizeDefault;
  campaigns: Campaign[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Business Name', templateRef: this.businessNameColumn, width: '15%' },
      { label: 'Payments Total', templateRef: this.paymentsTotalColumn, width: '15%' },
      { label: 'Max Ad Spend', templateRef: this.maxAdSpendColumn, width: '15%'},
      { label: 'Number of Top Ups', templateRef: this.numberOfTopUpsColumn, width: '15%' },
      { label: 'Days Since Last Top Up', templateRef: this.daysSinceLastTopUpColumn, width: '15%' },
      { templateRef: this.viewColumn, width: '200px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent): void {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  loadContracts(): void {
    this.campaigns = allCampaigns.slice(this.skip, this.skip + this.take);
  }
}


