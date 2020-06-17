import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'pembelian',
    loadChildren: () => import('./pembelian/pembelian.module').then( m => m.PembelianPageModule)
  },
  {
    path: 'img',
    loadChildren: () => import('./public/img/img.module').then( m => m.ImgPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'where-do-we-go',
    loadChildren: () => import('./where-do-we-go/where-do-we-go.module').then( m => m.WhereDoWeGoPageModule)
  },
  {
    path: 'one-lisn-world-tour',
    loadChildren: () => import('./one-lisn-world-tour/one-lisn-world-tour.module').then( m => m.OneLisnWorldTourPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'comingsoon',
    loadChildren: () => import('./comingsoon/comingsoon.module').then( m => m.ComingsoonPageModule)
  },
  {
    path: 'pembelian1',
    loadChildren: () => import('./pembelian1/pembelian1.module').then( m => m.Pembelian1PageModule)
  },
  {
    path: 'how-im-feeling',
    loadChildren: () => import('./how-im-feeling/how-im-feeling.module').then( m => m.HowImFeelingPageModule)
  },
  {
    path: 'pembelian2',
    loadChildren: () => import('./pembelian2/pembelian2.module').then( m => m.Pembelian2PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
