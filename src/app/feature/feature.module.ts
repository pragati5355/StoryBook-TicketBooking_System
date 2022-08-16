import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CardViewComponent } from './card-view/card-view.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviesComponent } from './movies/movies.component';


@NgModule({
  declarations: [
    CardViewComponent,
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    DashboardModule
  ]
})
export class FeatureModule { }
