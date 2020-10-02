import { CountryService } from './country.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CountryResolver implements Resolve<any> {
  constructor(private countryService: CountryService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.countryService.getCountry(route.params['name']);
  }
}
