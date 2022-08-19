import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketBookingRoutingModule } from './ticket-booking-routing.module';
import { SelectSeatsComponent } from './select-seats/select-seats.component';
import { ElementsModule } from '../elements/elements.module';
import { DashboardModule } from '../dashboard/dashboard.module';


@NgModule({
  declarations: [
    SelectSeatsComponent
  ],
  imports: [
    CommonModule,
    TicketBookingRoutingModule,
    DashboardModule
  ]
})
export class TicketBookingModule { }
