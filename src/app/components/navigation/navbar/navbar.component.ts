import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private show = false;
  constructor() {}

  ngOnInit() {}

  menuClicked(event: String) {
    console.log(event);
  }

  clicked(show: boolean) {
    console.log(show);
    this.show = show;
  }
}
