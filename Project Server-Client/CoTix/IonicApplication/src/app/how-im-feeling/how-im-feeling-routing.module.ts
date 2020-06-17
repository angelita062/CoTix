import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HowImFeelingPage } from './how-im-feeling.page';

const routes: Routes = [
  {
    path: '',
    component: HowImFeelingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HowImFeelingPageRoutingModule {}
