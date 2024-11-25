import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartModule } from './cart/cart.module';
import { APP_ROUTES } from './app.routes';
import { AuthLibModule } from '@demo/auth-lib';
import { ServicesModule } from '@demo/services';

@NgModule({
  imports: [
    BrowserModule,
    CartModule,
    AuthLibModule,
    ServicesModule,
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