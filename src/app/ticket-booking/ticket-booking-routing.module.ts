import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/auth-guard/auth.guard';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { SelectSeatsComponent } from './select-seats/select-seats.component';

const routes: Routes = [
  {
    path : "seats/:id",
    component : SelectSeatsComponent,
    // canActivate : [AuthGuard]
  },
  {
    path: "confirm/:id",
    component : ConfirmBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketBookingRoutingModule { }
