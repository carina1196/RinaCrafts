import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [RouterLink, CurrencyPipe, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  itemsInCart: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.itemsInCart = this.cartService.getCartItems();
  }

  addItem = (item: any) => {
    this.cartService.addItem(item);
    this.loadCart();
  };

  minusItem = (item: any) => {
    this.cartService.minusItem(item);
    this.loadCart();
  };

  onInputChange = (item: any, value: number) => {
    if (value > item.stock) {
      item.quantity = item.stock;
    } else {
      item.quantity = value;
    }
    this.cartService.updateItemQty(item, item.quantity);
  };

  checkOut = () => {
    this.cartService.clearCart();
    this.loadCart();
    alert(
      'Thank you for shopping with us! We have received your order. We will ship out your order soon.'
    );
  };

  deleteItem = (item: any) => {
    this.cartService.deleteItem(item);
    this.loadCart();
  };
}
