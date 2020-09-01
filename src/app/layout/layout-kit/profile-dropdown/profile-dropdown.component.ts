import { Component, OnInit } from '@angular/core';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.scss']
})
export class ProfileDropdownComponent implements OnInit {

  ROUTES = ROUTES;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
  }

}
