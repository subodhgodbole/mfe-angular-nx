import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Profile } from '../interfaces';

@Component({
  selector: 'demo-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  public profile: Profile;

  constructor(private authService: AuthService) {
    // NOP
  }

  get userName(): string {
    return this.authService.userName;
  }

  ngOnInit(): void {
    this.profile = this.authService.profile;
  }
}
