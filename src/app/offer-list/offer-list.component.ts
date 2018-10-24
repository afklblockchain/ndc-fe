import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afkl-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offers: [1, 2, 3];

  constructor() { }

  ngOnInit() {
  }

}
