import { Component, OnInit, Input } from '@angular/core';
import { TableColumn } from '../../../core/models/table';

@Component({
  selector: 'app-heading-table',
  templateUrl: './heading-table.component.html',
  styleUrls: ['./heading-table.component.scss']
})
export class HeadingTableComponent implements OnInit {

  @Input() isHeaderColumn = false;
  @Input() title: string;
  @Input() columns: TableColumn[] = [];
  @Input() sections: any[] = [];
  @Input() canAdd: boolean;
  @Input() loading: boolean;
  @Input() emptyDescription = `No items to display.`;

  constructor() { }

  ngOnInit(): void {
  }

}
