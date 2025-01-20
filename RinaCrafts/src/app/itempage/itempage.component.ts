import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-itempage',
  imports: [],
  templateUrl: './itempage.component.html',
  styleUrl: './itempage.component.css',
})
export class ItempageComponent {
  data: any;

  constructor(private productsService: ProductsService) {
    this.data = productsService.getAllProducts();
    console.log(this.data);
  }
}
