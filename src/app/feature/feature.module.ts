import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { CardViewComponent } from './card-view/card-view.component';


@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    
  ]
})
export class FeatureModule { }
