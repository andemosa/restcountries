import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from './country.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryFetchService {
  constructor(private http: HttpClient) {}

  getCountries(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

  getCountry(name: string) {
    return this.http.get(`https://restcountries.eu/rest/v2/name/${name}`).pipe(
      map(
        (result) =>
          <Country>{
            flag: result[0].flag,
            altText: result[0].alpha3code,
            name: result[0].name,
            population: result[0].population,
            region: result[0].region,
            capital: result[0].capital,
          }
      ),
      tap((country) => console.log(country))
    );
  }
}

// function sortThumbnail(arr) {
//   console.log(arr);
//   arr.map((elem) => {
//     let newObj = { flag: elem.flag };

//     console.log(newObj);
//   });
// }
