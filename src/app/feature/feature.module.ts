import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { MoviesComponent } from './movies/movies.component';
import { PlaysComponent } from './plays/plays.component';
import { ElementsModule } from '../elements/elements.module';
import { FeatureDeatilsComponent } from './feature-deatils/feature-deatils.component';


@NgModule({
  declarations: [
    MoviesComponent,
    PlaysComponent,
    FeatureDeatilsComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ElementsModule
  ]
})
export class FeatureModule { }
