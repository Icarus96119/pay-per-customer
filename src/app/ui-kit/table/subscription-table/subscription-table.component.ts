import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Subscription, SubscriptionStatus } from '../../../core/models/subscription';
import { allCampaignSubscriptions } from '../../../core/data/subscription';

@Component({
  selector: 'app-subscription-table',
  templateUrl: './subscription-table.component.html',
  styleUrls: ['./subscription-table.component.scss']
})
export class SubscriptionTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('statusColumn', {static: true}) statusColumn: TemplateRef<any>;
  @ViewChild('businessNameColumn', {static: true}) businessNameColumn: TemplateRef<any>;
  @ViewChild('paymentMethodColumn', {static: true}) paymentMethodColumn: TemplateRef<any>;
  @ViewChild('nextRenewalColumn', {static: true}) nextRenewalColumn: TemplateRef<any>;
  @ViewChild('renewalAmountColumn', {static: true}) renewalAmountColumn: TemplateRef<any>;
  @ViewChild('numberOfRenewalsColumn', {static: true}) numberOfRenewalsColumn: TemplateRef<any>;
  @ViewChild('editColumn', {static: true}) editColumn: TemplateRef<any>;

  SubscriptionStatus = SubscriptionStatus;
  allCampaignSubscriptions = allCampaignSubscriptions;

  columns: TableColumn[];
  isLoading = false;
  total = allCampaignSubscriptions.length;
  skip = 0;
  take = PageSizeDefault;
  campaignSubscriptions: Subscription[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Status', templateRef: this.statusColumn, width: '130px' },
      { label: 'Business Name', templateRef: this.businessNameColumn, width: '15%' },
      { label: 'Payment Method', templateRef: this.paymentMethodColumn, width: '15%' },
      { label: 'Next Renewal', templateRef: this.nextRenewalColumn, width: '15%'},
      { label: 'Renewal Amount', templateRef: this.renewalAmountColumn, width: '15%' },
      { label: 'Number of Renewals', templateRef: this.numberOfRenewalsColumn, width: '15%' },
      { templateRef: this.editColumn, width: '200px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  private async loadContracts() {
    this.campaignSubscriptions = allCampaignSubscriptions.slice(this.skip, this.skip + this.take);
  }
}


