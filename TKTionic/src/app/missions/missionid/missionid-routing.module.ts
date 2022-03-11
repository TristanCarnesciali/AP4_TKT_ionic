import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MissionidPage } from './missionid.page';

const routes: Routes = [
  {
    path: '',
    component: MissionidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MissionidPageRoutingModule {}
