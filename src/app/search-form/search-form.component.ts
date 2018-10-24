import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afkl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.from, '<->', this.to);
    console.log('cabin class', this.cabin);
    console.log('# of travellers', this.travellers);
    console.log('date', this.depart);
  }
}
