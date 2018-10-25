import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Offer } from './offer-card/offer';
import { SearchRequest } from './search-form/search';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(public httpClient: HttpClient) {}

  searchForOffers(searchRequest: SearchRequest): Observable<Offer[]> {
    console.log('searchRequest', searchRequest);
    // @ts-ignore
    return of([
      {
        price: '2038.01',
        currency: 'EUR',
        origin: 'JFK',
        destination: 'AMS',
        journeyTime: 'P0Y0M0DT7H5M0.000S',
        segments: [
          {
            departureStation: 'JFK',
            arrivalStation: 'AMS',
            departureDate: '2018-10-30',
            arrivalDate: '2018-10-31',
            departureTime: '18:50',
            arrivalTime: '06:55',
            airlineCode: 'KL',
            flightNumber: '0642'
          }
        ]
      },
      {
        id: 'c455b0c0-6301-4803-95b0-c06301280006',
        'price': '2097.41',
        'origin': 'JFK',
        'destination': 'AMS',
        'journeyTime': 'P0Y0M0DT9H50M0.000S',
        'segments': [
          {
            'departureStation': 'JFK',
            'arrivalStation': 'CDG',
            'departureDate': '2018-10-30',
            'arrivalDate': '2018-10-31',
            'departureTime': '19:40',
            'arrivalTime': '08:00',
            'airlineCode': 'KL',
            'flightNumber': '2376'
          },
          {
            'departureStation': 'CDG',
            'arrivalStation': 'AMS',
            'departureDate': '2018-10-31',
            'arrivalDate': '2018-10-31',
            'departureTime': '09:05',
            'arrivalTime': '10:30',
            'airlineCode': 'KL',
            'flightNumber': '1224'
          }
        ]
      },
    ]);
    // return this.httpClient.post<Offer[]>('', {});
  }
}
