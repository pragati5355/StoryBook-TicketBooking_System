import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviesComponent } from './movies/movies.component';
import { PlaysComponent } from './plays/plays.component';
import { ElementsModule } from '../elements/elements.module';


@NgModule({
  declarations: [
    MoviesComponent,
    PlaysComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    DashboardModule,
    ElementsModule
  ]
})
export class FeatureModule { }
