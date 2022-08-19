import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full'

  },
  {
    path : 'dashboard',
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : 'feature',
    loadChildren : () => import('./feature/feature.module').then(m => m.FeatureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
