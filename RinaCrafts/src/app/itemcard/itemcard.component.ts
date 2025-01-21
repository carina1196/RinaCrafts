import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  exceedStock: boolean = false;

  ngOnInit() {
    this.description = this.item.description;
    this.img = this.item.img;
    this.price = this.item.price;
    this.stock = this.item.quantity;
    this.checkQty();
  }

  checkQty = () => {
    if (this.stock < 1) {
      this.soldOut = true;
    } else {
      this.soldOut = false;
    }
  };

  checkSelected = () => {
    if (this.qtySelected >= this.stock) {
      this.exceedStock = true;
    } else {
      this.exceedStock = false;
    }
  };

  addItem = () => {
    this.qtySelected++;
    this.checkSelected();
  };

  minusItem = () => {
    if (this.qtySelected > 0) {
      this.qtySelected--;
    }
    this.checkSelected();
  };
}
