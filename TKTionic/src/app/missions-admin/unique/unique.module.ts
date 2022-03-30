import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UniquePageRoutingModule } from './unique-routing.module';

import { UniquePage } from './unique.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UniquePageRoutingModule
  ],
  declarations: [UniquePage]
})
export class UniquePageModule {}
