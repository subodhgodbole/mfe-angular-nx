import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartViewComponent } from './cart-view/cart-view.component';
import { RouterModule } from '@angular/router';
import { CART_ROUTES } from './cart.routes';
import { AuthLibModule } from '@demo/auth-lib';
import { ServicesModule } from '@demo/services';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    ServicesModule,
    RouterModule.forChild(CART_ROUTES)
  ],
  declarations: [
    CartViewComponent
  ]
})
export class CartModule { }
