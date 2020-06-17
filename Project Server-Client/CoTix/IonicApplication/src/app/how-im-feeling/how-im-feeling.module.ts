import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HowImFeelingPageRoutingModule } from './how-im-feeling-routing.module';

import { HowImFeelingPage } from './how-im-feeling.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HowImFeelingPageRoutingModule
  ],
  declarations: [HowImFeelingPage]
})
export class HowImFeelingPageModule {}
