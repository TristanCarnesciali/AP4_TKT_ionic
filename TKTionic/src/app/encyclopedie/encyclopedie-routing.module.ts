import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncyclopediePage } from './encyclopedie.page';

const routes: Routes = [
  {
    path: '',
    component: EncyclopediePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncyclopediePageRoutingModule {}
