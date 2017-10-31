/*import { Component } from '@angular/core';

import { UserService } from './shared/index';

@Component({
  selector: 'home-page',
  template: `
  <div>
    <button (click)="loadUser()">Load profile</button>
    {{ profile | json }}
  </div>
  `
})
export class HomeComponent {
  constructor(private userService: UserService) {}
  profile = {};

  loadUser() {
    this.userService.getUser().subscribe(data => this.profile = data);
  }
}*/