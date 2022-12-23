import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './products-search/products-search.component';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routes';
import { AuthLibModule } from '@demo/auth-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
  ],
  declarations: [
    ProductsSearchComponent
  ]
})
export class ProductsModule { }
