import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureDeatilsComponent } from './feature-deatils/feature-deatils.component';
import { MoviesComponent } from './movies/movies.component';
import { PlaysComponent } from './plays/plays.component';

const routes: Routes = [

  {
    path : 'movies',
    component : MoviesComponent
  },
  {
    path : 'plays',
    component : PlaysComponent
  },
  {
    path : 'details/:id',
    component : FeatureDeatilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
