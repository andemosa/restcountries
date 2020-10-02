import { CountryService } from './../country.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {
  country: any;
  borderlist: any;
  loaded: boolean = false;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.data.forEach((data) => {
      this.country = data['country'][0];
      this.countryService.getBorder(this.country.borders).subscribe((data) => {
        this.borderlist = showBorders(data);
        this.loaded = true;
      });
    });
    // this.route.params.forEach((params: Params) => {
    //   this.countryService
    //     .getCountry(params['name'])
    //     .subscribe((data) => (this.country = data));
    //   // this.borderlist = this.countryService.getBorder(this.country.borders);
    // });
  }

  toHome() {
    this.router.navigate(['/countries']);
  }
}

function showBorders(arr) {
  let names = [];
  return arr.map((elem) => {
    return elem[0];
    // names.push(elem[0].name);
    // return names;
  });
}
