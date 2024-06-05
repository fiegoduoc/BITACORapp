import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlocknotasPageRoutingModule } from './blocknotas-routing.module';

import { BlocknotasPage } from './blocknotas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlocknotasPageRoutingModule
  ],
  declarations: [BlocknotasPage]
})
export class BlocknotasPageModule {}
