import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Offer } from './offer-card/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(public httpClient: HttpClient) {}

  searchForOffers(): Observable<Offer[]> {
    return of([
      {
        price: 123.99,
        currency: 'EUR',
        origin: 'AMS',
        dest: 'LHR',
        travelTime: 'P0Y0M0DT10H55M0.000S',
        segments: [
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
        travelTime: 'P0Y0M0DT10H55M0.000S',
        segments: [
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
            dest: 'ATH',
            timeDeparture: '12:10',
            timeArrival: '13:45',
            dateDeparture: '2018-10-11',
            dateArrival: '2018-10-11',
            flightNumber: 'AF12345',
          },
          {
            origin: 'ATH',
            dest: 'LHR',
            timeDeparture: '12:10',
            timeArrival: '13:45',
            dateDeparture: '2018-10-11',
            dateArrival: '2018-10-11',
            flightNumber: 'KL12345',
          },
        ],
      }
    ]);
    // return this.httpClient.post<Offer[]>('', {});
  }
}
