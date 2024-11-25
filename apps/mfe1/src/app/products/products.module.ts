import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routes';
import { AuthLibModule } from '@demo/auth-lib';
import { ServicesModule } from '@demo/services';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    ServicesModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
  ],
  declarations: [
    ProductsSearchComponent
  ]
})
export class ProductsModule { }
