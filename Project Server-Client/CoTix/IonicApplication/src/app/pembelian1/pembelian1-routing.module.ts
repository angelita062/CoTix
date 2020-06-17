import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pembelian1Page } from './pembelian1.page';

const routes: Routes = [
  {
    path: '',
    component: Pembelian1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pembelian1PageRoutingModule {}
