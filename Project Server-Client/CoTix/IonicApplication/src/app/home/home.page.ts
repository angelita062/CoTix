import { Component } from '@angular/core';
import { products } from '../products';
import { Router } from '@angular/router';
import { UtilsService } from '../service/utils.service';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listProducts = [];
  constructor(
  private router: Router,
  private utils: UtilsService) {
  this.listProducts = products;
  console.log(products);
  console.log(this.listProducts);
  }
  pindah(item){
    console.log(item.url)
  
    this.router.navigate(['/'+item.url])
  }
}
