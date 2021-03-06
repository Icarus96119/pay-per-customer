import { Component, OnInit, Input } from '@angular/core';

import { TableColumn } from '../../../core/models/table';
import { isBoolean } from "util";

@Component({
  selector: 'app-heading-table',
  templateUrl: './heading-table.component.html',
  styleUrls: ['./heading-table.component.scss']
})
export class HeadingTableComponent implements OnInit {

  @Input() isHeaderColumn = false;
  @Input() isTableHeaderColumn = true;
  @Input() title: string;
  @Input() columns: TableColumn[] = [];
  @Input() headingClass: string;
  @Input() sections: any[] = [];
  @Input() canAdd: boolean;
  @Input() loading: boolean;
  @Input() emptyDescription = `No items to display.`;

  constructor() { }

  ngOnInit(): void {
  }

  mouseEnter(row: any): void {
    if (isBoolean(row.hover)) {
      row.hover = true;
    }
  }

  mouseLeave(row: any): void {
    if (isBoolean(row.hover)) {
      row.hover = false;
    }
  }

}
