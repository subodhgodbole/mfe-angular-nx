import { Injectable } from '@angular/core';
import { Profile } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userName: string = 'default';
  private _profile: Profile = {
    firstName: '',
    lastName: ''
  };

  constructor() {
    console.log('AuthService Created');
  }

  public get userName(): string {
    return this._userName;
  }

  public get profile(): Profile {
    return this._profile;
  }

  public set profile(profile: Profile) {
    this._profile = profile;
    console.log('Profile Set', this._profile);
  }

  public isLoggedIn(): boolean {
    return this._userName !== null;
  }

  public login(userName: string, _password: string): void {
    this._userName = userName;
    this._profile = {
      firstName: '',
      lastName: ''
    }
  }

  public logout(): void {
    this._userName = null;
  }
}
