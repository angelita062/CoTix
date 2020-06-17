import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneLisnWorldTourPageRoutingModule } from './one-lisn-world-tour-routing.module';

import { OneLisnWorldTourPage } from './one-lisn-world-tour.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneLisnWorldTourPageRoutingModule
  ],
  declarations: [OneLisnWorldTourPage]
})
export class OneLisnWorldTourPageModule {}
