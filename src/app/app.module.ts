import { CountryResolver } from './country/country.resolver';
import { NavbarComponent } from './navbar/navbar.component';
import { appRoutes } from './country/routes';
import { CountryThumbnailComponent } from './country/country-thumbnail.component';
import { CountryListComponent } from './country/country-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BorderComponent } from './border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryThumbnailComponent,
    CountryDetailComponent,
    NavbarComponent,
    BorderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [CountryResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
