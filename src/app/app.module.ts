import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutesModule } from './app-routes/app-routes.module';
import { InfoComponent } from './info/info.component';
import { CarOffersComponent } from './car-offers/car-offers.component';
import { CarDetailsComponent } from './car-details/car-details.component';

import { CarsOffersService } from './cars-offers.service';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    CarOffersComponent,
    CarDetailsComponent
  ],
  imports: [
    AppRoutesModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [CarsOffersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
