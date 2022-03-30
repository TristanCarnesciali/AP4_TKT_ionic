import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionsAdminPage } from './missions-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MissionsAdminPage
  },
  {
    path: 'unique',
    loadChildren: () => import('./unique/unique.module').then( m => m.UniquePageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionsAdminPageRoutingModule {}
