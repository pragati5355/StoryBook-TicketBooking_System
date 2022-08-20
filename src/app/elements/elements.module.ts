import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CardViewComponent,
    CardCarouselComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports : [
    CardViewComponent,
    CardCarouselComponent,
    NavBarComponent
  ]
})
export class ElementsModule { }
