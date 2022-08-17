import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardViewComponent } from './card-view/card-view.component';



@NgModule({
  declarations: [
    CardViewComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    CardViewComponent
  ]
})
export class ElementsModule { }
