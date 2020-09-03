import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Invoice, InvoiceStatus } from '../../../core/models/invoice';
import { allInvoices } from '../../../core/data/invoices';

@Component({
  selector: 'app-invoice-table',
  templateUrl: './invoice-table.component.html',
  styleUrls: ['./invoice-table.component.scss']
})
export class InvoiceTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('checkColumn', {static: true}) checkColumn: TemplateRef<any>;
  @ViewChild('statusColumn', {static: true}) statusColumn: TemplateRef<any>;
  @ViewChild('amountColumn', {static: true}) amountColumn: TemplateRef<any>;
  @ViewChild('customerInfoColumn', {static: true}) customerInfoColumn: TemplateRef<any>;
  @ViewChild('issuedOnColumn', {static: true}) issuedOnColumn: TemplateRef<any>;
  @ViewChild('paidOnColumn', {static: true}) paidOnColumn: TemplateRef<any>;
  @ViewChild('paymentRetryColumn', {static: true}) paymentRetryColumn: TemplateRef<any>;
  @ViewChild('voidedOnColumn', {static: true}) voidedOnColumn: TemplateRef<any>;
  @ViewChild('typeColumn', {static: true}) typeColumn: TemplateRef<any>;
  @ViewChild('payColumn', {static: true}) payColumn: TemplateRef<any>;

  InvoiceStatus = InvoiceStatus;
  allInvoices = allInvoices;

  columns: TableColumn[];
  isLoading = false;
  total = allInvoices.length
  skip = 0;
  take = PageSizeDefault;
  invoices: Invoice[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: ' ', templateRef: this.checkColumn, width: '60px' },
      { label: 'Status', templateRef: this.statusColumn, width: '120px' },
      { label: 'Invoice', templateRef: this.amountColumn, width: '15%' },
      { label: 'Customer Info', templateRef: this.customerInfoColumn, width: '15%' },
      { label: 'Issued On', templateRef: this.issuedOnColumn, width: '10%'},
      { label: 'Paid On', templateRef: this.paidOnColumn, width: '15%' },
      { label: 'Payment Retry', templateRef: this.paymentRetryColumn, width: '10%' },
      { label: 'Voided On', templateRef: this.voidedOnColumn, width: '10%' },
      { label: 'Type', templateRef: this.typeColumn, width: '10%' },
      { templateRef: this.payColumn, width: '200px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent) {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  private async loadContracts() {
    this.invoices = allInvoices.slice(this.skip, this.skip + this.take)
  }
}

