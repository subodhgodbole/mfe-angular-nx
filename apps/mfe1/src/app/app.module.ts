import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsModule } from './products/products.module';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule } from '@demo/auth-lib';

@NgModule({
  imports: [
    BrowserModule,
    ProductsModule,
    AuthLibModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
      AppComponent
  ]
})
export class AppModule { }
