import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectSeatsComponent } from './select-seats/select-seats.component';

const routes: Routes = [
  {
    path : "seats",
    component : SelectSeatsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBookingRoutingModule { }
