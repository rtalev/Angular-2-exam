import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from "ng2-toastr";
import { UsersService } from '../users/users.service';
import { Auth } from '../users/Auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent {
  Auth = new Auth();
  constructor(public toastrManager: ToastsManager, vRef: ViewContainerRef, private userService: UsersService, private authService: Auth) {
    this.toastrManager.setRootViewContainerRef(vRef);
    // this.userService.loginSuccess = this.loginSuccessMessage.bind(this);

  }
  // loginSuccessMessage() {
  //   this.toastrManager.success('Login successful');
  // }

  logoutUser($event) {
    $event.preventDefault();
    this.authService.removeUserAuthentication();
    this.toastrManager.success('Logout success').then(res => console.log(res));
  }
}
