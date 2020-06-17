import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-im-feeling',
  templateUrl: './how-im-feeling.page.html',
  styleUrls: ['./how-im-feeling.page.scss'],
})
export class HowImFeelingPage implements OnInit {
  slidebaru = {
    slidesPerView: 2.2
    }
    price = [
    { name: 'Early Bird', 
      price: 800000 },
    { name: 'Reguler',
      price: 1300000 },
    { name: 'VIP',
      price: 2500000 }
   
    ]

  constructor() { }

  ngOnInit() {
  }

}
