import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from  './home/home.component'
import { AboutTreasureComponent } from  './about-treasure/about-treasure.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'AboutTreasure', component: AboutTreasureComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
