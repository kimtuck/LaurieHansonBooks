import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutTreasureComponent } from './about-treasure/about-treasure.component';
import { AboutTheBookComponent } from './about-the-book/about-the-book.component';
import { AboutLaurieComponent } from './about-laurie/about-laurie.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { CharityComponent } from './charity/charity.component';
import { ThermoComponent } from './thermo/thermo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutTreasureComponent,
    AboutTheBookComponent,
    AboutLaurieComponent,
    NewsAndEventsComponent,
    CharityComponent,
    ThermoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
