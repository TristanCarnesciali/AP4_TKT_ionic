import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptesPage } from './comptes.page';

const routes: Routes = [
  {
    path: '',
    component: ComptesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptesPageRoutingModule {}
