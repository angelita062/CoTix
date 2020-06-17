import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneLisnWorldTourPage } from './one-lisn-world-tour.page';

const routes: Routes = [
  {
    path: '',
    component: OneLisnWorldTourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneLisnWorldTourPageRoutingModule {}
