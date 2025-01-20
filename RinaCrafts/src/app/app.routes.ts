import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ItempageComponent } from './itempage/itempage.component';
import { CartComponent } from './cart/cart.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const routes: Routes = [
  { path: '', title: 'Home Page', component: HomepageComponent },
  { path: 'aboutus', title: 'About Us', component: AboutusComponent },
  { path: 'products', title: 'All Products', component: ItempageComponent },
  { path: 'cart', title: 'Cart', component: CartComponent },
  { path: '**', component: HomepageComponent },
];
