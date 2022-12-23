import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'demo-auth',
  templateUrl: './auth.component.html',
  // styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) { }

  userName: string;
  password: string;

  login(): void {
    this.authService.login(this.userName, this.password);
    this.userName = null;
    this.password = null;
  }

  logout(): void {
    this.authService.logout();
  }

  isLogedIn(): boolean {
    return !!this.authService.userName;
  }
}
