import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhereDoWeGoPage } from './where-do-we-go.page';

const routes: Routes = [
  {
    path: '',
    component: WhereDoWeGoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhereDoWeGoPageRoutingModule {}
