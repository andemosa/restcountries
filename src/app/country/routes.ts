import { CountryResolver } from './country.resolver';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryListComponent } from './country-list.component';

export const appRoutes = [
  { path: 'countries', component: CountryListComponent },
  {
    path: 'countries/:name',
    component: CountryDetailComponent,
    resolve: { country: CountryResolver },
  },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
];
