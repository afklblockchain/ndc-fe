import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchRequest } from './search';

@Component({
  selector: 'afkl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  @Output() submit = new EventEmitter<SearchRequest>();

  from: string;
  to: string;
  cabin = 5;
  travellers = 1;
  depart = new Date();

  cabinClasses = [
    { name: 'Economy', value: 5 },
    { name: 'Premium Economy', value: 4 },
    { name: 'Business', value: 2 },
    { name: 'First', value: 1 },
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submit.emit({
      from: this.from,
      to: this.to,
      date: this.depart.toISOString().substr(0, this.depart.toISOString().indexOf('T')),
      cabinClass: this.cabin,
      nbPax: this.travellers
    });
  }
}
