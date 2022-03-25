import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertesAdminPage } from './alertes-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AlertesAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertesAdminPageRoutingModule {}
