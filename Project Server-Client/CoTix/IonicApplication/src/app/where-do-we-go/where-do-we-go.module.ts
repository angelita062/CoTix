import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhereDoWeGoPageRoutingModule } from './where-do-we-go-routing.module';

import { WhereDoWeGoPage } from './where-do-we-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhereDoWeGoPageRoutingModule
  ],
  declarations: [WhereDoWeGoPage]
})
export class WhereDoWeGoPageModule {}
