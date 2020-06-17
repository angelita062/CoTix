import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-where-do-we-go',
  templateUrl: './where-do-we-go.page.html',
  styleUrls: ['./where-do-we-go.page.scss'],
})
export class WhereDoWeGoPage implements OnInit {
  slidebaru = {
    slidesPerView: 2.2
    }
    price = [
    { name: 'Early Bird', 
      price: 900000 },
    { name: 'Reguler',
      price: 1000000 },
    { name: 'VIP',
      price: 2500000 }
   
    ]
   

  constructor() { }

  ngOnInit() {
    
  }

}
