import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-lisn-world-tour',
  templateUrl: './one-lisn-world-tour.page.html',
  styleUrls: ['./one-lisn-world-tour.page.scss'],
})
export class OneLisnWorldTourPage implements OnInit {
  slidebaru = {
    slidesPerView: 2.2
    }
    price = [
    { name: 'Early Bird', 
      price: 900000 },
    { name: 'Reguler',
      price: 1200000 },
    { name: 'VIP',
      price: 3500000 }
   
    ]

  constructor() { }

  ngOnInit() {
  }

}
