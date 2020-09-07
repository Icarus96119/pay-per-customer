import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignDetailCard } from '../../../core/models/campaign';

@Component({
  selector: 'app-campaign-detail-card',
  templateUrl: './campaign-detail-card.component.html',
  styleUrls: ['./campaign-detail-card.component.scss']
})
export class CampaignDetailCardComponent implements OnInit {

  @Input() info: CampaignDetailCard;
  @Input() link;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToLink(): void {
    if (this.link) {
      this.router.navigate(this.link);
    }
  }

}
