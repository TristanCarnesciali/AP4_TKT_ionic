import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EncyclopediePage } from './encyclopedie.page';

const routes: Routes = [
  {
    path: '',
    component: EncyclopediePage
  },  {
    path: 'animal',
    loadChildren: () => import('./animal/animal.module').then( m => m.AnimalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EncyclopediePageRoutingModule {}