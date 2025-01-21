import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  itemsInCart: any;

  constructor(private cartService: CartService) {
    this.itemsInCart = cartService.getCartItems();
  }

  checkOut = () => {
    this.cartService.clearCart();
    alert(
      'Thank you for shopping with us! We have received your order. We will ship out your order soon.'
    );
  };
}
