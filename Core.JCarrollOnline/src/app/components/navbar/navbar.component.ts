import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
/** navbar component*/
export class NavbarComponent implements OnInit {
  /** nav ctor */
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }
}
