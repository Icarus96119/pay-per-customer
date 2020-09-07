import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { HeadingTableComponent } from '../heading-table/heading-table.component';

import { TableColumn } from '../../../core/models/table';
import { ToastrService } from '../../../core/services/toastr.service';

import { tasks } from '../../../core/data/task';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {

  @Input() canAdd = false;
  @Input() headingClass= '';

  @ViewChild(HeadingTableComponent) table: HeadingTableComponent;
  @ViewChild('checkColumn', {static: true}) checkColumn: TemplateRef<any>;
  @ViewChild('detailColumn', {static: true}) detailColumn: TemplateRef<any>;
  @ViewChild('createdAtColumn', {static: true}) createdAtColumn: TemplateRef<any>;

  title = `Task`;
  tasks = tasks;

  columns: TableColumn[];
  isLoading = false;

  constructor(
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.columns = [
      { label: 'Carried Out', templateRef: this.checkColumn, width: '60px' },
      { label: 'Detail', templateRef: this.detailColumn, width: '70%' },
      { label: 'Created At', templateRef: this.createdAtColumn, width: '150px' },
    ];
    this.loadContracts();
  }

  loadContracts(): void {
    this.tasks = this.tasks.map(task => {
      const rows = task.rows.map(row => { return { ...row, hover: false } });
      task.rows = rows;
      return task;
    });
  }
}

