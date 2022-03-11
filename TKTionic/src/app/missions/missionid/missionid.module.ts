import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionidPageRoutingModule } from './missionid-routing.module';

import { MissionidPage } from './missionid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionidPageRoutingModule
  ],
  declarations: [MissionidPage]
})
export class MissionidPageModule {}
