import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'afkl-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  from: string;
  to: string;
  travellers = 1;
  departAt: Date;
  // returnAt: Date;
  // dateRange: Date[];
  cabinClass = 'Economy';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // [this.departAt, this.returnAt] = this.dateRange;
    console.log(this.from, this.to);
    console.log(this.travellers, this.cabinClass);
    console.log('departAt', this.departAt);
    // console.log('returnAt', this.returnAt);
  }
}
