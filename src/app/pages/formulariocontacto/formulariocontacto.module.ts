import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulariocontactoPageRoutingModule } from './formulariocontacto-routing.module';

import { FormularioContactoPage } from './formulariocontacto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulariocontactoPageRoutingModule
  ],
  declarations: [FormularioContactoPage]
})
export class FormulariocontactoPageModule {}
