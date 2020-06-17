import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { UtilsService } from '../service/utils.service';

@Component({
  selector: 'app-pembelian1',
  templateUrl: './pembelian1.page.html',
  styleUrls: ['./pembelian1.page.scss'],
})
export class Pembelian1Page implements OnInit {
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
