import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertesAdminPageRoutingModule } from './alertes-admin-routing.module';

import { AlertesAdminPage } from './alertes-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertesAdminPageRoutingModule
  ],
  declarations: [AlertesAdminPage]
})
export class AlertesAdminPageModule {}
