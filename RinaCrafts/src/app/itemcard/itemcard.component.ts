import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-itemcard',
  imports: [CurrencyPipe, FormsModule],
  templateUrl: './itemcard.component.html',
  styleUrl: './itemcard.component.css',
})
export class ItemcardComponent {
  @Input() item: any;
  description: string = '';
  img: string = '';
  price: number = 0;
  stock: number = 0;
  qtySelected: number = 0;
  soldOut: boolean = false;
  brand: string = '';

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.description = this.item.description;
    this.img = this.item.img;
    this.price = this.item.price;
    this.stock = this.item.quantity;
    this.brand = this.item.brand;
    this.checkQty();
    this.loadQty(this.item);
  }

  onInputChange = (value: number) => {
    this.qtySelected = value;
    this.cartService.updateItemQty(this.item, value);
  };

  checkQty = () => {
    if (this.stock < 1) {
      this.soldOut = true;
    } else {
      this.soldOut = false;
    }
  };

  addItem = (item: any) => {
    this.cartService.addItem(item);
    this.qtySelected++;
  };

  minusItem = (item: any) => {
    this.cartService.minusItem(item);
    if (this.qtySelected > 0) {
      this.qtySelected--;
    }
  };

  loadQty = (item: any) => {
    const cartItems = this.cartService.getCartItems();
    let inCart = cartItems.find(
      (data: any) =>
        data.description == item.description && data.brand == item.brand
    );
    if (inCart) {
      this.qtySelected = inCart.quantity;
    }
  };
}
