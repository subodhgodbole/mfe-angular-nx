import { Injectable } from '@angular/core';
import { Cart, Product } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart: Cart = {
    products: []
  };

  constructor() {
    console.log('CartService Created');
  }

  public get cart(): Cart {
    return this._cart;
  }

  public addProduct(product: Product) {
    this._cart.products.push(product);
    console.log('Product added to Cart', product);
  }

  public removeProduct(product: Product) {
    const index = this._cart.products.findIndex( prod => prod.id === product.id);
    this._cart.products.splice(index, 1);
    console.log('Product removed from Cart', product);
  }
}
