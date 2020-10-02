import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  COUNTRIES;
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http
      .get('https://restcountries.eu/rest/v2/all')
      .pipe(map((data) => (this.COUNTRIES = data)));
  }

  getCountry(name: string): Observable<any> {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`);
  }

  findMatches(wordToMatch) {
    return this.COUNTRIES.filter((place) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return place.name.match(regex);
    });
  }

  regionSearch(value) {
    return value === ''
      ? this.COUNTRIES
      : this.COUNTRIES.filter(
          (place) => place.region === this.capitalize(value)
        );
  }

  getBorder(arr) {
    let countries;
    return this.http.get('https://restcountries.eu/rest/v2/all').pipe(
      map((data) => {
        countries = data;
        return arr.map((elem) =>
          countries.filter((place) => place.alpha3Code === elem)
        );
      })
    );
  }

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
