import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandonneeListComponent } from './components/randonnee-list/randonnee-list.component';
import { ItineraireListComponent } from './components/itineraire-list/itineraire-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GeocodingComponent } from './components/geocoding/geocoding.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ResultsListComponent } from './components/results-list/results-list.component';
import { MapPointFormComponent } from './components/map-point-form/map-point-form.component';
import { MapComponent } from './components/map/map.component';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    AppComponent,
    RandonneeListComponent,
    ItineraireListComponent,
    NavBarComponent,
    FooterComponent,
    GeocodingComponent,
    ResultsListComponent,
    MapPointFormComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeafletModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
