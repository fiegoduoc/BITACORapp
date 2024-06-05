import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotasvozPageRoutingModule } from './notasvoz-routing.module';

import { NotasvozPage } from './notasvoz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotasvozPageRoutingModule
  ],
  declarations: [NotasvozPage]
})
export class NotasvozPageModule {}
