import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-pembelian2',
  templateUrl: './pembelian2.page.html',
  styleUrls: ['./pembelian2.page.scss'],
})
export class Pembelian2Page implements OnInit {
  dataPembeli = {
    nama: '',
    alamat: ''
    };   
    
    constructor(
      private router: Router,
      private utils:UtilsService,
      private cart: CartService) { }
  ngOnInit() {
  }
  pembayaran() {
    console.log(this.dataPembeli);
    this.cart.clearCart();
    this.utils.showToast('You got the ticket!');
    this.router.navigate(['/home']);
  } 
}
