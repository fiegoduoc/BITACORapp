import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotasvozPage } from './notasvoz.page';

const routes: Routes = [
  {
    path: '',
    component: NotasvozPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotasvozPageRoutingModule {}
