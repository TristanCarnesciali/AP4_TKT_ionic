import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SantePage } from './sante.page';

const routes: Routes = [
  {
    path: '',
    component: SantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SantePageRoutingModule {}
