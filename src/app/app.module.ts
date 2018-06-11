import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';

import { AgmCoreModule, MapsAPILoader } from '@agm/core';

import { NouisliderModule } from 'ng2-nouislider';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { FilteEstablecimientoPipe } from './filte-establecimiento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    FilteEstablecimientoPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    NouisliderModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA7n5puEdElclICVLP5t7-8bJ7iuDBm7Gw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
