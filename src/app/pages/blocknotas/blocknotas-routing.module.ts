import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlocknotasPage } from './blocknotas.page';

const routes: Routes = [
  {
    path: '',
    component: BlocknotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlocknotasPageRoutingModule {}
