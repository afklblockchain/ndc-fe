import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferCardComponent } from './offer-card/offer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    OfferListComponent,
    OfferCardComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
