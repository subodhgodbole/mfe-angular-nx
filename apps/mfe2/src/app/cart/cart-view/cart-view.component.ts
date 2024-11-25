import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { Cart, CartService, Product } from '@demo/services';

@Component({
  selector: 'app-products-search',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent implements OnInit {
  public cart: Cart;

  constructor(private authService: AuthService, private cartService: CartService) {
      // NOP
  }

  public ngOnInit() {
    this.cart = this.cartService.cart;
    console.log(this.cart);
  }

  public isLogedIn() {
    return this.authService.isLoggedIn();
  }

  public removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }

  public checkout() {
    alert('Checking out...')
  }
}
