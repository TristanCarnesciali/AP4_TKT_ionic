import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertesPage } from './alertes.page';

const routes: Routes = [
  {
    path: '',
    component: AlertesPage
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertesPageRoutingModule {}
