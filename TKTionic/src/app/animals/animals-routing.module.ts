import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalsPage } from './animals.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalsPage
  },
  {
    path: 'edit-animal',
    loadChildren: () => import('./edit-animal/edit-animal.module').then( m => m.EditAnimalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalsPageRoutingModule {}
