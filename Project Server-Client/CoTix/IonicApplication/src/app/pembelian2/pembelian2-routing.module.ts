import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pembelian2Page } from './pembelian2.page';

const routes: Routes = [
  {
    path: '',
    component: Pembelian2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pembelian2PageRoutingModule {}
