import { Component, Input } from '@angular/core';

@Component({
  selector: 'country-thumbnail',
  template: `<div
    class="card m-4 country-container"
    style="width: 18rem;"
    [routerLink]="['/countries', country.name]"
  >
    <img
      class="card-img-top"
      src="{{ country.flag }}"
      alt="{{ country.altText }}"
    />
    <div class=" thumbnail card-body">
      <h5 class="card-title">{{ country.name }}</h5>
      <p class="card-text">
        Population: <span class="text">{{ country.population | number }}</span>
      </p>
      <p class="card-text">
        Region: <span class="text">{{ country.region }}</span>
      </p>
      <p class="card-text">
        Capital: <span class="text">{{ country.capital }}</span>
      </p>
    </div>
  </div> `,
  styles: [
    `
      .card {
        min-height: 400px;
      }
      .card-img-top {
        height: 200px;
      }
    `,
  ],
})
export class CountryThumbnailComponent {
  @Input() country: any;
}
