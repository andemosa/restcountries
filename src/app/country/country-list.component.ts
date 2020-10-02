import { CountryFetchService } from './country-fetch.service';
import { CountryService } from './country.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'country-list',
  templateUrl: 'country-list.component.html',
  styleUrls: [`country-list.component.css`],
})
export class CountryListComponent implements OnInit {
  countries: any;
  constructor(
    private countryService: CountryService,
    private fetchCountry: CountryFetchService
  ) {}

  ngOnInit() {
    this.countryService
      .getCountries()
      .subscribe((data) => (this.countries = data));
  }

  searchCountries(e) {
    this.countries = this.countryService.findMatches(e.target.value);
  }

  regionSearch(e) {
    this.countries = this.countryService.regionSearch(e.target.value);
  }
}
