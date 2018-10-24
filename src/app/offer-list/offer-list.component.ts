import { Component, Input, OnInit } from '@angular/core';
import { Offer } from '../offer-card/offer';

@Component({
  selector: 'afkl-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  @Input() offers: Offer[];

  constructor() {
  }

  ngOnInit() {
  }

}
