import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

// add a property
  storageKey: string = 'contact-manager-jwt';

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem(this.storageKey, token);
  }
// retrive the token from the local storage object and using our storage key
  getToken() {
    return localStorage.getItem(this.storageKey);
  }
//check if there is token present
  isLoggedIn() {
    return this.getToken() !== null;
  }
// delete the logo jwt and redirect to the login route
  logout() {
    localStorage.removeItem(this.storageKey);
    this.router.navigate(['/login']);
  }

}
