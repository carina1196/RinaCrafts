import { Component, DoCheck } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements DoCheck {
  qtyInCart: number = 0;

  constructor(private cartService: CartService) {}

  ngDoCheck(): void {
    this.qtyInCart = this.cartService.getTotalQty();
  }
}
