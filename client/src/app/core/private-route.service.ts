import { Injectable } from '@angular/core';
import { CanActivate, Routes, ActivatedRouteSnapshot} from '@angular/router';
import { Auth } from '../users/Auth';
import { ToastsManager } from "ng2-toastr";

@Injectable()
export class PrivateRouteService implements CanActivate {

    constructor(private toastrManager: ToastsManager, private authService: Auth) {
}

  canActivate(): boolean {
    console.log('Authorized: ' + this.authService.isAuthenticated());
    if (!this.authService.isAuthenticated()) {
      this.toastrManager.warning('You have to log in your account!', 'Unauthorized action');
      return;
    }
    return this.authService.isAuthenticated();
  }
}
