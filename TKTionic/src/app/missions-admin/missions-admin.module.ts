import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MissionsAdminPageRoutingModule } from './missions-admin-routing.module';

import { MissionsAdminPage } from './missions-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MissionsAdminPageRoutingModule
  ],
  declarations: [MissionsAdminPage]
})
export class MissionsAdminPageModule {}
