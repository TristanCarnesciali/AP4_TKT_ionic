import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertesPageRoutingModule } from './alertes-routing.module';

import { AlertesPage } from './alertes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertesPageRoutingModule
  ],
  declarations: [AlertesPage]
})
export class AlertesPageModule {}
