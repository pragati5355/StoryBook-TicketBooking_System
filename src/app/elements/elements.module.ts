import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';



@NgModule({
  declarations: [
    CardViewComponent,
    CardCarouselComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CardViewComponent,
    CardCarouselComponent
  ]
})
export class ElementsModule { }
