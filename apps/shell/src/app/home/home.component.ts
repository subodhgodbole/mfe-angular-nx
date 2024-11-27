import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';
import { CartService } from '@demo/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public constructor(private authService: AuthService, private cartService: CartService) { }

  ngOnInit() {
    // NOP
  }
}
