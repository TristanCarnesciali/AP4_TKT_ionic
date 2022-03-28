import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertesAdminPage } from './alertes-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AlertesAdminPage
  },
  {
    path: 'unique',
    loadChildren: () => import('./unique/unique.module').then( m => m.UniquePageModule)
  },
  {
    path: 'modifier',
    loadChildren: () => import('./modifier/modifier.module').then( m => m.ModifierPageModule)
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
export class AlertesAdminPageRoutingModule {}
