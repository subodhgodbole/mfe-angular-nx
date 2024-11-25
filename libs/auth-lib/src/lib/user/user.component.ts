import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'demo-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  constructor(private authService: AuthService) {
    // NOP
  }

  get userName(): string {
    return this.authService.userName;
  }

  ngOnInit(): void {
  }
}
