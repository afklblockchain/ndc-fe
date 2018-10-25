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

  numberOfStops(legs) {
    return legs ? Array(legs.length - 1) : [];
  }

  logoUrl(airlineCode) {
    return `https://www.skyscanner.net/images/airlines/favicon/${airlineCode}.png`;
  }

  flightTime(travelTime) {
    const t = travelTime.indexOf('T');
    const h = travelTime.indexOf('H');
    const m = travelTime.indexOf('M', t);
    const hour = travelTime.substring(t + 1, h);
    const min = travelTime.substring(h + 1, m);
    return `${hour}h ${min}`;
  }
}
