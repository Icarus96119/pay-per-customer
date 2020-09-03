import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ROUTES } from '../../core/data/routes';
import { routerToLabel} from '../../core/utils/router.util';
import { enumToLabel } from '../../core/utils/enum.util';

@Component({
  selector: 'app-billing',
  templateUrl: './admin-billing.component.html',
  styleUrls: ['./admin-billing.component.scss']
})
export class AdminBillingComponent implements OnInit {

  ROUTES = ROUTES;
  header = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.header = routerToLabel(this.router);
  }

  switchHeader(url: string): void {
    this.header = enumToLabel(url);
  }

}
