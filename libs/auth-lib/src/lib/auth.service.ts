import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userName: string = null;

  constructor() {
    console.log('AuthService Created');
  }

  public get userName(): string {
    return this._userName;
  }

  public isLoggedIn(): boolean {
    return this._userName !== null;
  }

  login(userName: string, _password: string): void {
    this._userName = userName;
  }

  logout(): void {
    this._userName = null;
  }
}
