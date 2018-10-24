import { Component, Input, OnInit } from '@angular/core';
import { Offer } from './offer';

@Component({
  selector: 'afkl-offer-card',
  templateUrl: './offer-card.component.html',
  styleUrls: ['./offer-card.component.scss']
})
export class OfferCardComponent implements OnInit {

  @Input() offer: Offer;
  showDetails = false;

  constructor() { }

  ngOnInit() {
  }

}
