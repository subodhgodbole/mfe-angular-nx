import { Component, OnInit } from '@angular/core';
import { AuthService } from '@demo/auth-lib';

@Component({
  selector: 'app-products-search',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {
  protected userName: String;
  protected firstName: string;
  protected lastName: string;

  public constructor(private authService: AuthService) {
    // NOP
  }

  public ngOnInit() {
    this.userName = this.authService.userName;
    this.firstName = this.authService.profile.firstName;
    this.lastName = this.authService.profile.lastName;
  }

  public isLogedIn() {
    return this.authService.isLoggedIn();
  }

  public setProfile() {
    this.authService.profile = {
      firstName: this.firstName,
      lastName: this.lastName
    }
  }
}
