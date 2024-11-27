import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'demo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  protected userName: string;
  protected password: string;

  public constructor(private authService: AuthService) {
    // NOP
  }

  protected login(): void {
    this.authService.login(this.userName, this.password);
    this.userName = null;
    this.password = null;
  }

  protected logout(): void {
    this.authService.logout();
  }

  public isLogedIn(): boolean {
    return !!this.authService.userName;
  }
}
