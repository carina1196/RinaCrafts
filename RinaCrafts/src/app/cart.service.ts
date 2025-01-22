import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  totalQty: number = 0;
  itemsInCart: any = [];

  constructor() {}

  addItem = (item: any) => {
    this.totalQty++;
    const hasItem = this.itemsInCart.find(
      (data: any) =>
        data.description == item.description && data.brand == item.brand
    );

    if (hasItem) {
      hasItem.quantity++;
    } else {
      this.itemsInCart.push({
        brand: item.brand,
        description: item.description,
        quantity: 1,
        price: item.price,
      });
    }
  };

  minusItem = (item: any) => {
    this.totalQty--;
    let hasItem = this.itemsInCart.find(
      (data: any) =>
        item.description == data.description && data.brand == item.brand
    );
    if (hasItem) {
      if (hasItem.quantity > 1) {
        hasItem.quantity--;
      } else {
        this.itemsInCart = this.itemsInCart.filter(
          (data: any) =>
            data.description !== hasItem.description ||
            data.brand !== hasItem.brand
        );
      }
    }
  };

  updateItemQty = (item: any, quantity: number) => {
    let hasItem = this.itemsInCart.find(
      (data: any) =>
        item.description == data.description && data.brand == item.brand
    );
    if (hasItem) {
      hasItem.quantity = quantity;
    }
  };

  getTotalQty = () => {
    return this.totalQty;
  };

  getCartItems = () => {
    return this.itemsInCart;
  };

  clearCart = () => {
    this.itemsInCart = [];
    this.totalQty = 0;
  };
}
