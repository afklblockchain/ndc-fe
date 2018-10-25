import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Offer } from './offer-card/offer';
import { SearchRequest } from './search-form/search';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private searchUrl = '/search';

  constructor(public httpClient: HttpClient) {}

  searchForOffers(searchRequest: SearchRequest): Observable<Offer[]> {
    console.log('searchRequest', searchRequest);
    return this.httpClient.post<Offer[]>(this.searchUrl, searchRequest, this.httpOptions).pipe(
      catchError(this.handleError<any>('searchForOffers'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error);
      return of(result as T);
    };
  }
}
