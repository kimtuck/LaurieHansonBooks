import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { ProgramsComponent } from './programs/programs.component';
import { ContactComponent } from './contact/contact.component';
import {SendMailService} from './send-mail.service';
import { PaypalComponent } from './paypal/paypal.component';
import { BookSigningComponent } from './book-signing/book-signing.component';


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
    ThermoComponent,
    ProgramsComponent,
    ContactComponent,
    PaypalComponent,
    BookSigningComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    SendMailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
