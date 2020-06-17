import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pembelian2PageRoutingModule } from './pembelian2-routing.module';

import { Pembelian2Page } from './pembelian2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pembelian2PageRoutingModule
  ],
  declarations: [Pembelian2Page]
})
export class Pembelian2PageModule {}
