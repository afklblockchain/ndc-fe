import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer-card/offer';

@Component({
  selector: 'afkl-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offers: Offer[] = [
    {
      price: 123.99,
      currency: 'EUR',
      origin: 'AMS',
      dest: 'LHR',
      travelTime: 1,
      legs: [
        {
          origin: 'AMS',
          dest: 'LHR',
          timeDeparture: '12:10',
          timeArrival: '13:45',
          dateDeparture: '2018-10-11',
          dateArrival: '2018-10-11',
          flightNumber: 'KL12345',
        },
      ],
    },
    {
      price: 99.90,
      currency: 'EUR',
      origin: 'AMS',
      dest: 'LHR',
      travelTime: 3,
      legs: [
        {
          origin: 'AMS',
          dest: 'CDG',
          timeDeparture: '10:10',
          timeArrival: '11:40',
          dateDeparture: '2018-10-11',
          dateArrival: '2018-10-11',
          flightNumber: 'KL12345',
        },
        {
          origin: 'CDG',
          dest: 'LHR',
          timeDeparture: '12:10',
          timeArrival: '13:45',
          dateDeparture: '2018-10-11',
          dateArrival: '2018-10-11',
          flightNumber: 'KL12345',
        },
      ],
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
