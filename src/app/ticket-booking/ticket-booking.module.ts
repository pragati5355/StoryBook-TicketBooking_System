import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { ElementsModule } from '../elements/elements.module';

import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SelectSeatsComponent,
    ConfirmBookingComponent
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule,
    ElementsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TicketBookingModule { }
