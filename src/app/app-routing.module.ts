import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutTreasureComponent } from './about-treasure/about-treasure.component';
import { AboutTheBookComponent } from './about-the-book/about-the-book.component';
import { AboutLaurieComponent } from './about-laurie/about-laurie.component';
import { NewsAndEventsComponent } from './news-and-events/news-and-events.component';
import { CharityComponent } from './charity/charity.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'AboutTreasure', component: AboutTreasureComponent },
  { path: 'AboutTheBook', component: AboutTheBookComponent },
  { path: 'AboutLaurie', component: AboutLaurieComponent },
  { path: 'NewsAndEvents', component: NewsAndEventsComponent },
  { path: 'Charity', component: CharityComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
