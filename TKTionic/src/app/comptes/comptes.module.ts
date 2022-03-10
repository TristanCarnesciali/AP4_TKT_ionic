import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptesPageRoutingModule } from './comptes-routing.module';

import { ComptesPage } from './comptes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptesPageRoutingModule
  ],
  declarations: [ComptesPage]
})
export class ComptesPageModule {}
