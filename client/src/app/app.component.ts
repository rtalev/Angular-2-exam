import { Component } from '@angular/core';
import {Auth} from './users/Auth';
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public toastrManager: ToastsManager, private authService: Auth) {

  }

  logoutUser($event) {
    $event.preventDefault();
    this.authService.removeUserAuthentication();
    this.toastrManager.success('Logout succses').then(res => console.log(res));
  }
}
