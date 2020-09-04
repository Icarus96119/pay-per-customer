import { Component, EventEmitter, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { TableComponent } from '../../../ui-kit/table/table.component';

import { TableColumn } from '../../../core/models/table';
import { PageSizeDefault } from '../../../core/models/paginator';
import { ToastrService } from '../../../core/services/toastr.service';
import { Payment, PaymentStatus } from '../../../core/models/payment';
import { allPayments } from '../../../core/data/billing';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {

  @Output() page: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  @ViewChild(TableComponent) table: TableComponent;
  @ViewChild('indexColumn', {static: true}) indexColumn: TemplateRef<any>;
  @ViewChild('paymentNumberColumn', {static: true}) paymentNumberColumn: TemplateRef<any>;
  @ViewChild('paymentMethodColumn', {static: true}) paymentMethodColumn: TemplateRef<any>;
  @ViewChild('dateTimeColumn', {static: true}) dateTimeColumn: TemplateRef<any>;
  @ViewChild('amountColumn', {static: true}) amountColumn: TemplateRef<any>;
  @ViewChild('statusColumn', {static: true}) statusColumn: TemplateRef<any>;

  PaymentStatus = PaymentStatus;
  allPayments = allPayments.map((payment, index) => {
    return {...payment, index: index + 1}
  });

  columns: TableColumn[];
  isLoading = false;
  total = allPayments.length;
  skip = 0;
  take = PageSizeDefault;
  payments: Payment[] = [];

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: '#', templateRef: this.indexColumn, width: '50px' },
      { label: 'Payment Number', templateRef: this.paymentNumberColumn, width: '20%' },
      { label: 'Payment Method', templateRef: this.paymentMethodColumn, width: '20%' },
      { label: 'Date & Time', templateRef: this.dateTimeColumn, width: '20%'},
      { label: 'Amount', templateRef: this.amountColumn, width: '100px' },
      { label: 'Status', templateRef: this.statusColumn, width: '150px' },
    ];
    this.loadContracts();
  }

  onPage(e: PageEvent): void {
    this.take = e.pageSize;
    this.skip = this.take * e.pageIndex;
    this.loadContracts();
  }

  loadContracts(): void {
    this.payments = this.allPayments.slice(this.skip, this.skip + this.take);
  }
}


