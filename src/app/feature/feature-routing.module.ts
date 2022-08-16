import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './card-view/card-view.component';

const routes: Routes = [

  {
    path : '',
    component : CardViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
