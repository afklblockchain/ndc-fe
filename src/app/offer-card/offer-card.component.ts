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

  onSelect(event) {
    event.stopPropagation();
  }

  numberOfStops() {
    return Array(this.offer.legs.length - 1);
  }

  logoUrl(airlineCode) {
    return `https://www.skyscanner.net/images/airlines/favicon/${airlineCode}.png`;
  }

  flightTime(travelTime) {
    const tIndex = travelTime.indexOf('T');
    const hour = travelTime.substr(tIndex + 1, 2);
    const min = travelTime.substr(tIndex + 4, 2);
    return `${hour}h ${min}`;
  }
}
