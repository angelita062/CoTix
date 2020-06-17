import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pembelian1PageRoutingModule } from './pembelian1-routing.module';

import { Pembelian1Page } from './pembelian1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pembelian1PageRoutingModule
  ],
  declarations: [Pembelian1Page]
})
export class Pembelian1PageModule {}
