import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

import { ROUTES } from '../../../core/data/routes';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input() width = 200;

  form: FormGroup = this.fb.group({
    search: ''
  });

  private unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.clearWhenExitingSearchPage();
    this.searchKeywordChanged();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

  private searchKeywordChanged(): void {
  }

  private clearWhenExitingSearchPage(): void {
  }

}
