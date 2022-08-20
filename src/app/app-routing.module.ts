import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'dashboard',
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : 'feature',
    loadChildren : () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path : 'ticket',
    loadChildren : () => import('./ticket-booking/ticket-booking.module').then(m => m.TicketBookingModule)
  },
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
