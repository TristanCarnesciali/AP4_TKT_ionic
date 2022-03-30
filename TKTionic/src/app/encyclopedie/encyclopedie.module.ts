import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EncyclopediePageRoutingModule } from './encyclopedie-routing.module';
import { EncyclopediePage } from './encyclopedie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EncyclopediePageRoutingModule
  ],
  declarations: [EncyclopediePage]
})
export class EncyclopediePageModule {}