import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {

  isMobileMenu: boolean;

  constructor() {
    this.isMobileMenu = false;
  }

  showMobileMenu() {
    this.isMobileMenu = this.isMobileMenu ? false : true;
  }

  hideMobileMenu() {
    this.isMobileMenu = false;
  }

}
