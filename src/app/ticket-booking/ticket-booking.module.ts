import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { SelectSeatsComponent } from './select-seats/select-seats.component';


@NgModule({
  declarations: [
    SelectSeatsComponent
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule
  ]
})
export class TicketBookingModule { }
