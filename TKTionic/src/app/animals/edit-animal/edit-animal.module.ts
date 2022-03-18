import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditAnimalPageRoutingModule } from './edit-animal-routing.module';
import { EditAnimalPage } from './edit-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    EditAnimalPageRoutingModule
  ],
  declarations: [EditAnimalPage]
})
export class EditAnimalPageModule {}
