import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertesPage } from './alertes.page';

const routes: Routes = [
  {
    path: '',
    component: AlertesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertesPageRoutingModule {}
