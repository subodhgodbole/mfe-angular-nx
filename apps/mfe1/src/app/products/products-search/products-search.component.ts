import { Component } from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { CartService, Product } from '@demo/services';
import { PRODUCTS } from './products';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent {
  protected searchedProducts: Product[] = PRODUCTS;

  public constructor(private authService: AuthService, private cartService: CartService) {
      // NOP
  }

  public isLogedIn() {
    return this.authService.isLoggedIn();
  }

  public addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  public removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
  }

  public isInCart(p: Product) {
    return this.cartService.cart.products.find(prod => prod.id === p.id);
  }
}
