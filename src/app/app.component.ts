import { Component } from '@angular/core';
import { Offer } from './offer-card/offer';
import { SearchRequest } from './search-form/search';
import { OfferService } from './offer.service';

@Component({
  selector: 'afkl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loading = false;
  offers: Offer[] = [];

  constructor(public offerService: OfferService) {
  }

  onSubmit(searchRequest: SearchRequest) {
    this.offers = [];
    this.loading = true;
    this.offerService.searchForOffers(searchRequest)
      .then(offers => {
        this.offers = offers[0];
        this.loading = false;
      })
      .catch(error => {
        console.error(error);
        this.loading = false;
      });
  }
}
