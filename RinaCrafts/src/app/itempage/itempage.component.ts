import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { ItemcardComponent } from '../itemcard/itemcard.component';

@Component({
  selector: 'app-itempage',
  imports: [ItemcardComponent],
  templateUrl: './itempage.component.html',
  styleUrl: './itempage.component.css',
})
export class ItempageComponent {
  data: any;

  constructor(private productsService: ProductsService) {
    productsService.getAllProducts().subscribe((res) => (this.data = res));
  }
}
