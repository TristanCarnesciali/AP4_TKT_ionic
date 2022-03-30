import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SantePageRoutingModule } from './sante-routing.module';

import { SantePage } from './sante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SantePageRoutingModule
  ],
  declarations: [SantePage]
})
export class SantePageModule {}
